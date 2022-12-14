import { AppBar, Box, Toolbar, Typography, Container, Button, Modal, InputLabel, Input } from "@mui/material";
import starwarslogo from "../../assets/starwarslogo.png";
import { useState } from "react";
import { nanoid } from "nanoid";

const style = {
  fontFamily: "monospace",
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "#f0ece1",
    border: "1px solid #000000",
    boxShadow: 24,
    p: 4,
  },
  orangeButton: {
    backgroundColor: "#dd4e1e",
    color: "#080808",
    fontFamily: "monospace",
  },
  whiteButton: {
    backgroundColor: "#f0ece1",
    color: "#080808",
    fontFamily: "monospace",
    "&:hover": {
      backgroundColor: "#080808",
      color: "#f0ece1",
    },
  },
  headerTitle: {
    display: "flex",
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".1rem",
    color: "#080808",
  },
};

interface character {
  id: string;
  name: string;
  birthYear: string;
  mass: number;
  height: number;
}
interface Props {
  handleAdd: (newCharacter: character) => void
}



const PageHeader: React.FC<Props> = ({handleAdd}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createCharacter = (e: any) => {
    let newCharacter = {
      id: nanoid(),
      name: e.target.name.value,
      birthYear: e.target.birthYear.value,
      mass: e.target.mass.value,
      height: e.target.height.value,
    };
    handleAdd(newCharacter);
    console.log(newCharacter);
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#dd4e1e",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={starwarslogo} height="50px" />
          <Typography
            variant="h5"
            noWrap
            style={style.headerTitle}
            sx={{ ml: 2 }}
          >
            Character Explorer
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              style={style.whiteButton}
              onClick={handleOpen}
            >
              CREATE NEW CHARACTER
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style.modal}>
          <Typography variant="h6" component="h2" style={style}>
            Create Character
          </Typography>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={createCharacter}
          >
            <InputLabel style={style} sx={{mt: 2}}>Name</InputLabel>
            <Input
              size="small"
              name="name"
              defaultValue=""
              sx={{ mb: 1 }}
            />
            <InputLabel style={style} sx={{mt: 2}}>Birth Year (BBY)</InputLabel>
            <Input
              size="small"
              name="birthYear"
              defaultValue=""
              sx={{ mb: 1 }}
            />
            <InputLabel style={style} sx={{mt: 2}}>Mass(kg)</InputLabel>
            <Input
              size="small"
              name="mass"
              defaultValue=""
              sx={{ mb: 1 }}
            />
            <InputLabel style={style} sx={{mt: 2}}>Height(cm)</InputLabel>
            <Input
              size="small"
              name="height"
              defaultValue=""
              sx={{ mb: 1 }}
            />
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                type="submit"
                style={style.orangeButton}
              >
                CONFIRM CHARACTER CREATION
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </AppBar>
  );
};
export default PageHeader;
