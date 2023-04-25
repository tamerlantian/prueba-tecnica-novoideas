import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      tag: "Inicio",
      toLink: "inicio",
    },
    {
      tag: "Chat",
      toLink: "chat",
    },
    {
      tag: "Logout",
      toLink: "/logout",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map(({ tag, toLink }) => {
          return (
            <li key={tag}>
              <NavLink to={toLink}>{tag}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
