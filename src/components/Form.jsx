import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword, reset } from "../store";
import Button from "@mui/material/Button";
import { FormControl, TextField } from "@mui/material";

const Form = ({ action }) => {
  const { username, password } = useSelector((state) => {
    return state.form;
  });

  const dispatch = useDispatch();

  // set credentials to localstorage
  // dispatch credentials
  // dispatch function to clean input fields
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    action({ username, password });
    dispatch(reset());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form__name">Login</p>
      <FormControl className="form__group">
        <TextField
          label="username"
          variant="outlined"
          className="form__input"
          onChange={(e) => dispatch(setUsername(e.target.value))}
          type="text"
          value={username}
          margin="normal"
        />
      </FormControl>
      <FormControl className="form__group">
        <TextField
          label="password"
          className="form__input"
          onChange={(e) => dispatch(setPassword(e.target.value))}
          type="password"
          value={password}
          margin="dense"
        />
      </FormControl>

      <Button
        sx={{ fontWeight: "bold" }}
        className="form__button"
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default Form;
