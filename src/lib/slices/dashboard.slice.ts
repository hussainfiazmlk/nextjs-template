import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./fetch.query";


export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery:customBaseQuery,
    endpoints: (builder) => ({
        getDashboardData: builder.query({
            query: () => 'dashboard',
          }),
          getAdditionalData: builder.query({
            query: () => 'additional-data',
          }),

    }),
});

export const { useGetDashboardDataQuery,useLazyGetAdditionalDataQuery } = dashboardApi;