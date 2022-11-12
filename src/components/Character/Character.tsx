import {
  Button,
  Box,
  Card,
  CardHeader,
  Avatar,
  Modal,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTER_PROFILE } from "./query";

interface Props {
  id: string;
}

const Character: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery(CHARACTER_PROFILE, {
    variables: { id },
  });
  const [profile, setProfile] = useState(data);
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  useEffect(() => {
    setProfile(data);
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  let editCharacter = (e: any) => {
    e.preventDefault();
    data.person.name = e.target.name.value;
    data.person.birthYear = e.target.species.value;
    data.person.height = e.target.height.value;
    data.person.mass = e.target.mass.value;
    data.person.homeworld.name = e.target.homeworld.value;
    handleEditClose();
  };

  // let deleteCharacter = (e) => {
  //     e.preventDefault();
  //     let newIds = characters.filter(character => {
  //         return character.id > characters[char-1].id
  //     }).forEach(character => {
  //         character.id = character.id-1
  //     })
  //     characters.splice([char-1],1);
  //     setCharacters(characters);
  //     toggleDelete();
  // }
console.log(profile.person.name)
  return (
    <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <Typography variant="h3">{profile.person.name}</Typography>
      <Button variant="contained" size="small" onClick={handleEditOpen}>
        EDIT
      </Button>
      <Button variant="outlined" size="small" onClick={handleEditOpen}>
        DELETE
      </Button>
      <Typography variant="h5">
        Year of Birth: {profile.person.birthYear}
      </Typography>
      <Typography variant="h5">Height: {profile.person.height}cm</Typography>
      <Typography variant="h5">Mass: {profile.person.mass}kg</Typography>
      <Typography variant="h5">
        Home Planet: {profile.person.homeworld.name}
      </Typography>
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Character
          </Typography>
          <form onSubmit={editCharacter}>
            <InputLabel>Name</InputLabel>
            <TextField
              size="small"
              name="name"
              defaultValue={data.person.name}
            />
            <InputLabel>Year of Birth</InputLabel>
            <TextField
              size="small"
              name="birthYear"
              defaultValue={data.person.birthYear}
            />
            <InputLabel>Height</InputLabel>
            <TextField
              size="small"
              name="height"
              defaultValue={data.person.height}
            />
            <InputLabel>Mass</InputLabel>
            <TextField
              size="small"
              name="mass"
              defaultValue={data.person.mass}
            />
            <InputLabel>Home Planet</InputLabel>
            <TextField
              size="small"
              name="homeworld"
              defaultValue={data.person.homeworld.name}
            />
            <Button variant="outlined" type="submit">
              Edit
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Character;
