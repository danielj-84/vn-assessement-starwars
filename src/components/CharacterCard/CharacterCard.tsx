import { Box, Card, CardContent, Button, Typography, Modal, InputLabel, TextField } from "@mui/material";
import { useState } from 'react';

const style = {
  modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '1px solid #000',
      boxShadow: 24,
      p: 4
  },
  orangeButton: {
      backgroundColor: "#dd4e1e",
      color: "#080808",
      "&:hover": {
        backgroundColor: "#080808",
        color: "#f0ece1",
      }
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

const delCharacter = () => {

}

const CharacterCard: React.FC<Props> = ({ id, name, birthYear, mass, height, homeworld }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ width: 250, textAlign: "center", margin: 2 }}>
        <Card variant="outlined" sx={{ borderRadius: "10%", backgroundColor: "#f0ece1" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Birth: {birthYear} ({homeworld})
            </Typography>
            <Typography variant="body2">
              Mass: {mass}kg
            </Typography>
            <Typography variant="body2">
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Character
          </Typography>
          <form style={{display: "flex", flexDirection: "column"}} onSubmit={editCharacter}>
            <InputLabel>Name</InputLabel>
            <TextField size="small" name="name" defaultValue={name} />
            <InputLabel>Birth Year</InputLabel>
            <TextField size="small" name="species" defaultValue={birthYear} />
            <InputLabel>Mass</InputLabel>
            <TextField size="small" name="species" defaultValue={mass} />
            <InputLabel>Height</InputLabel>
            <TextField size="small" name="species" defaultValue={height} />
            <InputLabel>Homeworld</InputLabel>
            <TextField size="small" name="species" defaultValue={homeworld} />
            <Box display="flex" justifyContent="space-between" sx={{mt: 2}}>
            <Button variant="text" onClick={delCharacter} sx={{color: "#dd4e1e"}}>
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
