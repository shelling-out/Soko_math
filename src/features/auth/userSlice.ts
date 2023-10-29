import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter , createSelector, createSlice   } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { User } from "../../types";

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
let initialState  = { 
    id:null,
    username:'',
    token:''
};
export const userSlice = createSlice({
  name:'user',
  initialState ,
  reducers:{
    setUser: (state , action ) => {
      return state = action.payload ; 
    }
  }
});

export const { setUser } = userSlice.actions;

export const extendedApiUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Response, LoginRequestData >({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),

    }),
    register: builder.mutation<string,RegisterRequestData> ({
      query: (user) => ({
        url:'/auth/register',
        method:'POST',
        body: user
      })
    }),
    editProfile: builder.mutation<string , RegisterRequestDAta> ({
      query: ({body ,id }) => ({
        url:`/user/profile/${id}`,
        method:'PATCH',
        body: body
      })
    }),
    deleteProfile: builder.mutation<string , {id:number} > ({
      query: ({id})=> ({
        url:`/user/profile/${id}`,
        method:'DELETE'
      })
    })
  })
});



export const { useLoginMutation , useRegisterMutation , useEditProfileMutation , useDeleteProfileMutation } = extendedApiUserSlice ;

export const selectUser = (state : RootState) => state.user ;