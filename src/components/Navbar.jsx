import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Facebook } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
    const[open,setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }} fontWeight={500}>
        FaceBook
        </Typography>
        <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e)=>setOpen(true)}
          />
        </Icons>
        <Userbox  onClick={(e)=>setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">John</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
