// import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import deathstar from "../../assets/deathstar.png";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CHARACTER_LIST } from './query'
import { useQuery } from "@apollo/client";
interface Props {
  handleIdChange: (newId: string) => void;
}

const CharacterList: React.FC<Props> = ({ handleIdChange }) => {
    const { loading, error, data } = useQuery(CHARACTER_LIST);

    if(loading) return <h1>loading</h1>;
    if (error) return <h1>error</h1>;

    return (
      <Grid item xs={5} sx={{ bgcolor: "background.paper" }}>
        <nav aria-label="StarWars character list">
          <List sx={{ maxHeight: 475, overflow: "auto" }}>
            {data.allPeople.people.map((character: any) => (
              <ListItem 
              disablePadding
              key={character.id}
              onClick={() => handleIdChange(character.ID!)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar alt="death star" src={deathstar} />
                  </ListItemIcon>
                  <ListItemText primary={character.name} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
        </nav>
      </Grid>
  )
}

export default CharacterList;
