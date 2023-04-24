import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./apis/chatApi";
import { authApi } from "./apis/authApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
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
