import { apiSlice } from "../api/apiSlice";

import { User } from "../../types";

export const reactionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addReaction : builder.mutation ({ 
      query: ({id , body }) => ({
        url:`/reaction/add/${id}`,
        body: body ,
        method:'POST'
      }),
      invalidatesTags: (result , err , arg  ) => [{type:'Post' , id: arg.postId}] 
    }),
    deleteReaction: builder.mutation ({
        query: ({id}) => ({
            url:`/reaction/delete/${id}`,
            method:'DELETE'
        }),
        invalidatesTags: (result , err , arg  ) => [{type:'Post' , id: arg.postId}] 
    }),
    updateReaction: builder.mutation ({
        query: ({id , body }) => ({
            url:`/reaction/edit/${id}`,
            method:'PATCH',
            body: body
        }),
        invalidatesTags: (result , err , arg  ) => [{type:'Post' , id: arg.postId}] 
    })
    ,
    addGroupReaction : builder.mutation ({ 
      query: ({postId , groupId , body }) => ({
        url:`/group/${groupId}/reaction/${postId}`,
        body: body ,
        method:'POST'
      }),
      invalidatesTags: (result , err , arg  ) => [{type:'GroupPost' , id: arg.postId}] 
    }),
    deleteGroupReaction: builder.mutation ({
        query: ({id , groupId}) => ({
            url:`/group/${groupId}/reaction/${id}`,
            method:'DELETE'
        }),
        invalidatesTags: (result , err , arg  ) => [{type:'GroupPost' , id: arg.postId}] 
    }),
    updateGroupReaction: builder.mutation ({
        query: ({id  , groupId , body }) => ({
            url:`/group/${groupId}/reaction/${id}`,
            method:'PATCH',
            body: body
        }),
        invalidatesTags: (result , err , arg  ) => [{type:'GroupPost' , id: arg.postId}] 
    })
  })
});


export const {  
    useAddReactionMutation,
    useUpdateReactionMutation,
    useDeleteReactionMutation,
    useAddGroupReactionMutation,
    useUpdateGroupReactionMutation,
    useDeleteGroupReactionMutation
} = reactionSlice ;