import * as React from 'react';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  const [id, setId] = React.useState("");
  const handleIdChange = React.useCallback((newId: string) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <Box>
        <Typography variant="h4">Star Wars Character Explorer</Typography>
        <Typography variant="h6">A Viral Nation Assessment</Typography>
        <Divider sx={{mb: 2}} />
      </Box>
      <CharacterList handleIdChange={handleIdChange}/>
      <h6>Daniel DiMatteo-Garcia | 2022</h6>
    </div>
  );
}

export default App;
