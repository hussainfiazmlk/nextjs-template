// store/api.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './fetch.query';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<{ token: string }, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation,useSignupMutation } = authApi;