import './App.css';
import { useState } from 'react';
import CharacterList from './components/CharacterList/CharacterList';
import { Box, Typography, Button, Modal } from "@mui/material";

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
  },
}

function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <CharacterList />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style.modal}>
          <Typography variant="h6" component="h2" style={style} sx={{mb: 2}}>
            Hey Pranav!
          </Typography>
          <Typography variant="h6" component="h2" style={style} sx={{mb: 2}}>
            Here is my finished site! Thank you again - it was great to meet you and I look forward to speaking with you soon.
          </Typography>
          <Typography variant="h6" component="h2" style={style} sx={{textAlign: "right"}}>
            -Daniel
          </Typography>
            <Box display="flex" justifyContent="flex-end" sx={{mt: 4}}>
            <Button variant="contained" onClick={handleClose} style={style.orangeButton}>
              CLOSE
            </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
