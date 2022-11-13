import { Box, Card, CardContent, Button, Typography, Modal, InputLabel, TextField } from "@mui/material";
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { CHARACTER_LIST, DELETE_CHARACTER_MUTATION } from "../CharacterList/query";

const style = {
  fontFamily: "monospace",
  modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 420,
      bgcolor: "#f0ece1",
      border: '1px solid #000000',
      boxShadow: 24,
      p: 4
  },
  orangeButton: {
      backgroundColor: "#dd4e1e",
      color: "#080808",
      fontFamily: "monospace",
  }
  }
interface Props {
  id: string;
  name: string;
  birthYear: string;
  mass: number;
  height: number;
  homeworld: string;
}

const editCharacter = () => {
  
}

const CharacterCard: React.FC<Props> = ({ id, name, birthYear, mass, height, homeworld }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteCharacter, {loading}] = useMutation(DELETE_CHARACTER_MUTATION, {
    variables: {id},
    onError: (error) => alert(error.message),
    refetchQueries: [
      {
        query: CHARACTER_LIST
      }
    ]
  });

  return (
    <>
      <Box sx={{ width: 260, textAlign: "center", margin: 2 }}>
        <Card variant="outlined" sx={{ borderRadius: "10%", backgroundColor: "#f0ece1" }}>
          <CardContent>
            <Typography variant="h5" component="div" style={style}>
              {name}</Typography>
            <Typography style={style} sx={{ mb: 1.5 }} color="text.secondary">
              Birth: {birthYear} ({homeworld})
            </Typography>
            <Typography variant="body2" style={style}>
              Mass: {mass}kg
            </Typography>
            <Typography variant="body2" style={style}>
              Height: {height}cm
            </Typography>
          </CardContent>
          <Button
            size="small"
            variant="contained"
            style={style.orangeButton}
            sx={{mb: 3}}
            onClick={handleOpen}
          >
            Edit or Delete
          </Button>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style.modal}>
          <Typography variant="h6" component="h2" style={style}>
            Edit Character
          </Typography>
          <form style={{display: "flex", flexDirection: "column"}} onSubmit={editCharacter}>
            <InputLabel style={style}>Name</InputLabel>
            <TextField size="small" name="name" defaultValue={name} sx={{mb: 1}}/>
            <InputLabel style={style}>Birth Year</InputLabel>
            <TextField size="small" name="species" defaultValue={birthYear} sx={{mb: 1}} />
            <InputLabel style={style}>Mass(kg)</InputLabel>
            <TextField size="small" name="species" defaultValue={mass} sx={{mb: 1}} />
            <InputLabel style={style}>Height(cm)</InputLabel>
            <TextField size="small" name="species" defaultValue={height} sx={{mb: 1}} />
            <InputLabel style={style}>Homeworld</InputLabel>
            <TextField size="small" name="species" defaultValue={homeworld} sx={{mb: 1}} />
            <Box display="flex" justifyContent="space-between" sx={{mt: 2}}>
            <Button variant="text" disabled={loading} onClick={() => deleteCharacter()} sx={{color: "#dd4e1e"}}>
              Delete
            </Button>
            <Button variant="contained" type="submit" style={style.orangeButton}>
              SAVE CHANGES
            </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CharacterCard;
