import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (credentials) => {
          return {
            url: "/testing",
            method: "POST",
            redirect: "follow",
            headers: {
              "Content-Type": "application/json",
            },
            body: {
              user: credentials.username,
              password: credentials.password,
            },
          };
        },
      }),
      logout: builder.query(),
    };
  },
});

export const { useLoginMutation } = authApi;
export { authApi };
