import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from '@mui/material/Modal';
import { Avatar, Typography, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { CameraAlt, Image, VideoFile } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom:"20px"
});


const Add = () => {
    const[open,setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e)=>setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} padding={2} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography fontWeight={500} variant="span">John Doe</Typography>
          </UserBox>

          <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Add content here"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary"/>
          <CameraAlt color="error"/>
          <Image color="secondary"/>
          <VideoFile color="success"/>
        </Stack>
        <Button variant="contained" sx={{backgroundColor:"green", width:"100%"}}>POST</Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
