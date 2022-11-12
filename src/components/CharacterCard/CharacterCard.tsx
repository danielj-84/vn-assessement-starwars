import { Box, Card, CardContent, Button, Typography } from "@mui/material";

interface Props {
  id: string;
  name: string;
  birthYear: string;
  mass: number;
  height: number;
  homeworld: string;
}

const CharacterCard: React.FC<Props> = ({ id, name, birthYear, mass, height, homeworld }) => {

  return (
    <Box sx={{ width: 250, textAlign: "center", margin: 2 }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10%", backgroundColor: "#f0ece1" }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Birth: {birthYear} ({homeworld})
          </Typography>
          <Typography variant="body2">Mass: {mass}cm</Typography>
          <Typography variant="body2">Height: {height}kg</Typography>
        </CardContent>
        <Button
          size="small"
          variant="contained"
          sx={{ mb: 3, backgroundColor: "#dd4e1e", color: "#080808" }}
        >
          Edit or Delete
        </Button>
      </Card>
    </Box>
  );
};

export default CharacterCard;