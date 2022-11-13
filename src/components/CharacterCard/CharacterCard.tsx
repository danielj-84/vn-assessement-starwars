import { Box, Card, CardContent, Button, Typography, Modal, InputLabel, TextField } from "@mui/material";
import { useState } from 'react';
import { idText } from "typescript";

import { client } from "../../index";

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
}

// interface Props {
//   character: {id: string, name: string, birthYear: string, mass: string, height: number, homeworld:{name: string}}
// }

const CharacterCard: React.FC<Props> = ({ id, name, birthYear, mass, height }) => {
// const CharacterCard: React.FC<Props> = ({ character }) => {
  // console.log(character);
  // const { name, birthYear, mass, height } = character;
  // const homeworld = character.homeworld.name;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editCharacter = () => {
  
  }

  const handleDelete = (id: any) => {
    client.cache.evict({id: id})
  }

  return (
    <>
      <Box sx={{ width: 280, textAlign: "center", margin: 1.5 }}>
        <Card id={id} variant="outlined" sx={{borderRadius: "10%", backgroundColor: "#f0ece1", minHeight: 225 }}>
          <CardContent sx={{mb: 2}}>
            <Typography variant="h5" component="div" style={style}>
              {name}</Typography>
            <Typography style={style} sx={{ mb: 1.5 }} color="text.secondary">
              Birth: {birthYear}
            </Typography>
            <Typography variant="body2" style={style}>
              Mass: {mass}kg
            </Typography>
            <Typography variant="body2" style={style}>
              Height: {height}cm
            </Typography>
          </CardContent>
          <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <Button
            size="small"
            variant="text"
            sx={{mb: 3, color: "#dd4e1e"}} 
            onClick={(id) => {handleDelete(id)}}
          >
            Delete
          </Button>
          <Button
            size="small"
            variant="contained"
            style={style.orangeButton}
            sx={{mb: 3}} 
            onClick={handleOpen}
          >
            Edit
          </Button>
          </Box>
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
            <TextField size="small" name="birthYear" defaultValue={birthYear} sx={{mb: 1}} />
            <InputLabel style={style}>Mass(kg)</InputLabel>
            <TextField size="small" name="mass" defaultValue={mass} sx={{mb: 1}} />
            <InputLabel style={style}>Height(cm)</InputLabel>
            <TextField size="small" name="height" defaultValue={height} sx={{mb: 1}} />
            <Box display="flex" justifyContent="flex-end" sx={{mt: 2}}>
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
