import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter  } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  token: string;
}

interface Response {
  user: User;
}
interface LoginRequestData {
    email:string,
    password:string
};

interface RegisterRequestData extends LoginRequestData {
  data:any
}
const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Response, LoginRequestData >({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      })
    }),
    register: builder.mutation<string,RegisterRequestData> ({
      query: (user) => ({
        url:'/auth/register',
        method:'POST',
        body:user
      })
    })
  }),
});



export const { useLoginMutation , useRegisterMutation } = userSlice ;

