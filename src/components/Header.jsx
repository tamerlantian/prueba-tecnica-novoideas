import React from "react";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ handleDrawerToggle }) => {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <div className="toolbar">
        <Typography sx={{fontWeight: "bold"}} variant="h6" noWrap component="div">
          Novoideas
        </Typography>
        <Typography component={NavLink} to="/logout">
          <LogoutIcon sx={{ color: "white" }} />
        </Typography>
      </div>
    </Toolbar>
  );
};

export default Header;
