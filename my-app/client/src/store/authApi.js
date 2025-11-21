import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5050/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (build) => ({
    postRegister: build.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    postLogin: build.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    getMe: build.query({
      query: () => '/me',
    }),
  }),
});

export const { usePostRegisterMutation, usePostLoginMutation } = authApi;
