import React, { useState } from "react";

const Form = ({ action }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <input type="submit" value="login" />
      </div>
    </form>
  );
};

export default Form;
