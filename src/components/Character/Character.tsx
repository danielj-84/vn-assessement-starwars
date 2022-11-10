// import { Button, Box, Card, CardHeader, Avatar, Modal, Typography, InputLabel, TextField } from '@mui/material';
// import { useState } from 'react';

// export default function CharacterList(character: <person>, style: []) {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     let editChar = (e) => {
//         e.preventDefault();
//         character.name = e.target.name.value;
//         character.species = e.target.species.value;
//         character.status = e.target.status.value;
//         handleClose()
//     }
//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style.modal}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                     Edit Character
//                     </Typography>
//                     <form onSubmit={editChar} style={style.form}>
//                         <InputLabel>Name</InputLabel>
//                         <TextField size='small' name='name' defaultValue={character.name}/>
//                         <InputLabel>Species</InputLabel>
//                         <TextField size='small' name='species' defaultValue={character.species}/>
//                         <InputLabel>Status</InputLabel>
//                         <TextField size='small' name='status' defaultValue={character.status}/>
//                         <Button style={style.button} variant='outlined' type='submit'>Edit</Button>
//                     </form>
//                 </Box>
//             </Modal>
//     </Box>
//   );
// }

export {}