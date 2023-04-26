import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";

const NavItems = () => {
  const location = useLocation();
  console.log(location);
  const links = [
    {
      text: "Inicio",
      link: "inicio",
      icon: <HomeIcon />,
    },
    {
      text: "Chat",
      link: "chat",
      icon: <ChatIcon />,
    },
  ];

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={link}
              selected={link === location.pathname.split("/").pop()}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NavItems;
