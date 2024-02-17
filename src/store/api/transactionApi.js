// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://csb-u0slz.vercel.app/api/' }),
    endpoints: (builder) => ({
      getTransactions: builder.query({
        query: () => 'transactions',
      }),
    }),
  });
  
  export const { useGetTransactionsQuery } = api;
  
  export {api};
