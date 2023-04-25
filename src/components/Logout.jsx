import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  return <Navigate replace to="/login" />;
};

export default Logout;
