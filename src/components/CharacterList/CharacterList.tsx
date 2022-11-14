import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CHARACTER_LIST } from "./query";
import { Grid, Box, Card, CardContent, Button, Typography, Modal, InputLabel, TextField } from "@mui/material";
import PageHeader from "../PageHeader/PageHeader";

const style = {
  fontFamily: "monospace",
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "#f0ece1",
    border: "1px solid #000000",
    boxShadow: 24,
    p: 4,
  },
  orangeButton: {
    backgroundColor: "#dd4e1e",
    color: "#080808",
    fontFamily: "monospace",
  },
  whiteButton: {
    backgroundColor: "#f0ece1",
    width: 250,
    height: 75,
    fontWeight: 600,
    color: "#080808",
    fontFamily: "monospace",
    "&:hover": {
      backgroundColor: "#080808",
      color: "#f0ece1",
    },
  },
};

interface character {
    id: string;
    name: string;
    birthYear: string;
    mass: number;
    height: number;
}

const CharacterList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (character: character) => {
    setCharEdit(character);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { loading, error, data } = useQuery(CHARACTER_LIST);
  const [characters, setCharacters] = useState<any>([]);
  const [charEdit, setCharEdit] = useState<{
    id: string;
    name: string;
    birthYear: string;
    mass: number;
    height: number;
  }>({
    id: "id",
    name: "name",
    birthYear: "birthYear",
    mass: 0,
    height: 0,
  });

  useEffect(() => {
    if (data?.allPeople) {
      setCharacters(data.allPeople.people);
    }
  }, [data]);

  const handleEdit = (e: any) => {
    e.preventDefault();
    let newList = [...characters];
    let char = newList.findIndex((p: any) => p.id === e.target.id);

    let newCharacter = {
      id: e.target.id,
      name: e.target.name.value,
      birthYear: e.target.birthYear.value,
      mass: e.target.mass.value,
      height: e.target.height.value,
    };
    newList = characters.filter((char: any) => {
      return char.id !== e.target.id;
    });

    newList.splice(char, 0, newCharacter);
    setCharacters(newList);
    handleClose();
  };

  const handleDelete = (id: string) => {
    const newList = characters.filter((char: any) => {
      return char.id !== id;
    });
    setCharacters(newList);
  };

  const handleAdd = (newCharacter: character) => {
    let newList = [...characters];
    newList.unshift(newCharacter);
    setCharacters(newList);
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>error</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <PageHeader handleAdd={handleAdd} />
      <Grid container sx={{ marginTop: 8 }}>
        {characters.slice(0,20).map((character: character) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={character.id}
              container
              justifyContent="center"
            >
              <Box sx={{ width: 260, textAlign: "center", margin: 2 }}>
                <Card
                  variant="outlined"
                  sx={{ borderRadius: "10%", backgroundColor: "#f0ece1" }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" style={style}>
                      {character.name}
                    </Typography>
                    <Typography
                      style={style}
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                    >
                      Birth: {character.birthYear}
                    </Typography>
                    <Typography variant="body2" style={style}>
                      Mass: {character.mass}kg
                    </Typography>
                    <Typography variant="body2" style={style}>
                      Height: {character.height}cm
                    </Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="space-around">
                    <Button
                      size="small"
                      variant="text"
                      sx={{ mb: 3, color: "#dd4e1e" }}
                      onClick={() => {
                        handleDelete(character.id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      style={style.orangeButton}
                      sx={{ mb: 3 }}
                      onClick={() => {
                        handleOpen(character);
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                </Card>
              </Box>
              <Modal open={open} onClose={handleClose}>
                <Box sx={style.modal}>
                  <Typography variant="h6" component="h2" style={style}>
                    Edit Character
                  </Typography>
                  <form
                    style={{ display: "flex", flexDirection: "column" }}
                    onSubmit={handleEdit}
                    id={charEdit.id}
                  >
                    <InputLabel style={style}>Name</InputLabel>
                    <TextField
                      size="small"
                      name="name"
                      defaultValue={charEdit.name}
                      sx={{ mb: 1 }}
                    />
                    <InputLabel style={style}>Birth Year</InputLabel>
                    <TextField
                      size="small"
                      name="birthYear"
                      defaultValue={charEdit.birthYear}
                      sx={{ mb: 1 }}
                    />
                    <InputLabel style={style}>Mass(kg)</InputLabel>
                    <TextField
                      size="small"
                      name="mass"
                      defaultValue={charEdit.mass}
                      sx={{ mb: 1 }}
                    />
                    <InputLabel style={style}>Height(cm)</InputLabel>
                    <TextField
                      size="small"
                      name="height"
                      defaultValue={charEdit.height}
                      sx={{ mb: 1 }}
                    />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      sx={{ mt: 2 }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        style={style.orangeButton}
                      >
                        SAVE CHANGES
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Modal>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CharacterList;
