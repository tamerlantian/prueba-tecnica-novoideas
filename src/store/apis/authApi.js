import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => {
    return {
      login: builder.query({
        query: (credentials) => {
          return {
            url: "/testing",
            method: "POST",
            body: {
              username: credentials.username,
              password: credentials.password,
            },
          };
        },
      }),
      logout: builder.query(),
    };
  },
});

export const { useLoginQuery } = authApi;
export { authApi };
