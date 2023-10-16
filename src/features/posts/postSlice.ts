import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector  } from "@reduxjs/toolkit";
import { PostProperties } from "../../types";
import { getUser } from "../../components/util/getUser";
import { useSelector } from "react-redux";

export interface PostRequest {
  id?:number ; 
  url?:string;
  body?: {
    data:string
  } ;
};

export const postsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts : builder.query<PostProperties[],PostRequest>({
        query: ( request:PostRequest ) => ({
            url: request.url
        }),
        transformResponse:(res)=>{
            return res.posts ;
        },
        providesTags:['Post']
    }),
    getPost: builder.query<PostProperties , PostRequest> ({
      query: ( {id}) => ({
        url: `/post/${id}` ,
        method:'GET',
        providesTags:['Post']
      })
    }),
    addPost: builder.mutation<PostProperties ,PostRequest> ({
      query: (request: PostRequest ) => ({
        url:request.url ,
        method:'POST',
        body:request.body
      }),
      invalidatesTags:['Post']
    }),
    deletePost:builder.mutation< string , PostRequest > ({
      query: (request:PostRequest) => ({
        url:request.url,
        method:'DELETE',
        invalidatesTags:['Post']
      })
    }),
    updatePost: builder.mutation< string , PostRequest> ({
      query: (request:PostRequest) => ({
        url:request.url,
        method:'PATCH',
        body: request.body,
        invalidatesTags:['Post']
      })
    })
  }),
});


export const { useGetPostsQuery , useGetPostQuery , useAddPostMutation , useDeletePostMutation , useUpdatePostMutation  } = postsSlice ;
