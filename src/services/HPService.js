// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/constants/api';

export const hpApi = createApi({
  reducerPath: 'hpApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: () => ({
        url: '/characters',
      }),
    }),
  }),
});
