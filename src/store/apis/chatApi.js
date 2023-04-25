import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const chatApi = createApi({
  reducerPath: "chat",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      fetchChats: builder.query({
        query: (credentials) => {
          return {
            url: "/testing",
            method: "GET",
            params: {
              user: credentials.username,
              password: credentials.password,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchChatsQuery } = chatApi;
export { chatApi };
