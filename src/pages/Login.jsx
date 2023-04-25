import React from "react";
import { Navigate } from "react-router-dom";
import { Form } from "../components";
import { useLoginMutation } from "../store/apis/authApi";

const Login = () => {
  const [login, results] = useLoginMutation();

  if (results?.data === "Usuario autenticado") {
    console.log("redirect");
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <Form action={login} />
      </div>
    </div>
  );
};

export default Login;
