import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./apis/chatApi";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { formReducer } from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(chatApi.middleware)
      .concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./apis/authApi";
export * from "./apis/chatApi";
export { setPassword, setUsername, reset } from "./slices/formSlice";
