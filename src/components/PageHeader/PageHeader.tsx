import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import deathstar from "../../assets/deathstar.png";
import starwarslogo from "../../assets/starwarslogo.png";
function PageHeader() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#dd4e1e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={starwarslogo} height="50px" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              ml: 2,
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#080808",
            }}
          >
            Character Explorer
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f0ece1",
                color: "#080808",
                fontFamily: "monospace",
                "&:hover": {
                  backgroundColor: "#080808",
                  color: "#f0ece1",
                },
              }}
            >
              CREATE NEW CHARACTER
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PageHeader;
