import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
        ? process.env.REACT_APP_API_URL + '/api'  // додаємо /api до хоста
        : '/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user?.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (build) => ({
    postRegister: build.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    postLogin: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    getMe: build.query({
      query: () => '/auth/me',
    }),
  }),
});

export const { usePostRegisterMutation, usePostLoginMutation } = authApi;
