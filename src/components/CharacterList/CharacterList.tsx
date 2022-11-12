import Grid from "@mui/material/Grid";
import { CHARACTER_LIST } from "./query";
import { useQuery } from "@apollo/client";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const { loading, error, data } = useQuery(CHARACTER_LIST);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <Grid container sx={{marginTop: 8}}>
      {data.allPeople.people.map((character: any) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={character.id} container justifyContent="center">
            <CharacterCard id={character.id} name={character.name} birthYear={character.birthYear} mass={character.mass} height={character.height} homeworld={character.homeworld.name}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CharacterList;
