import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../API.js";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
