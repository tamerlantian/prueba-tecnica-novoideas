import React from "react";
import { Navigate } from "react-router-dom";
import { Form } from "../components";
import { useLoginMutation } from "../store/apis/authApi";

const Login = () => {
  const [login, results] = useLoginMutation();

  if (results.data === "Usuario autenticado") {
    console.log(results);
    return <Navigate replace to="/dashboard" />;
  }

  return (
    <div className="container">
      <main className="login">
        <Form action={login} />
      </main>
    </div>
  );
};

export default Login;
