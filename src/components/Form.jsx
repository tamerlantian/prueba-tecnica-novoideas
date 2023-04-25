import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword, reset } from "../store";

const Form = ({ action }) => {
  const { username, password } = useSelector((state) => {
    return state.form;
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    action({ username, password });
    dispatch(reset());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Username</label>
        <input
          onChange={(e) => dispatch(setUsername(e.target.value))}
          type="text"
          placeholder="username"
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => dispatch(setPassword(e.target.value))}
          type="password"
          placeholder="password"
          value={password}
        />
      </div>
      <div>
        <input type="submit" value="login" />
      </div>
    </form>
  );
};

export default Form;
