import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector  } from "@reduxjs/toolkit";
import { relation } from "../../types";
import { User } from "../../types";

export const relationsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], {url:string}> ({
      query: ({url}) => ({
        url: url
      })
    }),
    getUser: builder.query< User , {id:Number} > ({
      query: ({id})=>({
        url:`/user/profile/${id}`
      })
    })
  })
});


export const {  useGetUsersQuery , useGetUserQuery   } = relationsSlice ;