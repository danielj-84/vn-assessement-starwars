import * as React from 'react';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Grid} from '@mui/material'
import Character from './components/Character/Character'
import { useState, useCallback } from 'react';
import { Button } from '@mui/material';


function App() {
  const [id, setId] = useState("cGVvcGxlOjE=");
  const handleIdChange = useCallback((newId: string) => {
    setId(newId);
  }, [id]);

  return (
    <div className="App">
      <Box>
        <Typography variant="h4">Star Wars Character Explorer</Typography>
        <Typography variant="h6">A Viral Nation Assessment</Typography>
        <Divider sx={{mb: 2}} />
      </Box>
      <Button>Click here to make your own character</Button>
        <Divider sx={{mb: 2}} />
      <Grid container spacing={2} columns={16}>
        <CharacterList handleIdChange={handleIdChange}/>
        <Character id={id} />
      </Grid>
      <h6>Daniel DiMatteo-Garcia | 2022</h6>
    </div>
  );
}

export default App;
