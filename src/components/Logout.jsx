import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  console.log("delete storage");
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  return <Navigate replace to="/login" />;
};

export default Logout;
