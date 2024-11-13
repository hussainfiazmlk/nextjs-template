import { BACKEND_API_URL } from "@/environment";
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {setCookie,getCookie} from 'cookies-next'
const baseQuery = fetchBaseQuery({
  baseUrl: BACKEND_API_URL,
  prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).token;
    const token = getCookie('token');
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    localStorage.removeItem("token");
    setCookie("token","");
    // Handle the 401 error here, e.g., redirecting to login
    window.location.href = '/login';
    // Or dispatch an action to log out the user, etc.
    // api.dispatch(logoutUser());
  }
  return result;
}