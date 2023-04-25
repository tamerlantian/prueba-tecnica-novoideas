import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    reset: (state, action) => {
      (state.username = ""), (state.password = "");
    },
  },
});

export const { setPassword, setUsername, reset } = formSlice.actions;
export const formReducer = formSlice.reducer;
