import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import deathstar from '../../assets/deathstar.png'
import { Avatar } from '@mui/material';

const characters = [
    {name: "Daniel"},
    {name: "Antonio"},
    {name: "Laura"},
    {name: "Paulette"},
    {name: "Jeremy"},
    {name: "Sam"}
]

export default function CharacterList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main folders">
        <List>
            {characters.map(character => {
                return (
                    <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                      <Avatar alt="death star" src={deathstar} />
                      </ListItemIcon>
                      <ListItemText primary={character.name} />
                    </ListItemButton>
                    <Divider />
                  </ListItem>
                )
            })}
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar alt="death star" src={deathstar} />
              </ListItemIcon>
              <ListItemText primary="Character 1" />
            </ListItemButton>
          </ListItem>
          <Divider /> */}
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar alt="death star" src={deathstar} />
              </ListItemIcon>
              <ListItemText primary="Character 2" />
            </ListItemButton>
          </ListItem>
          <Divider /> */}
        </List>
      </nav>
    </Box>
  );
}