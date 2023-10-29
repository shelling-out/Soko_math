import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector  } from "@reduxjs/toolkit";

import { User } from "../../types";

const ids = ['mySentRequests','myReceivedRequests','myFriends','myBlockedList','whoBlockedMeList']

export const relationsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRelations: builder.query<User[], {status:string}> ({ 
      query: ({status}) => ({
        url: `/relationship/${status}`,
      }),
      providesTags: (result , err , arg ) => result ? [...result.map(({id}) =>({type:'Relation' as const , id}) ) , 'Relation'] : ['Relation']
    }),
    getGroupUsers: builder.query< User[] , {id: number , type : string } > ({
      query: ({id , type } ) => ({
        url:`/group/${id}/${type}`
      })
    }),
    getUser: builder.query< User , {id:Number} > ({
      query: ({id})=>({
        url:`/user/profile/${id}`
      })
    }),
    sendFriendshipRequest: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/sendFriendRequest/${id}`, // user id 
        method:'POST'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    
    deleteFriendshipRequest: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/request/${id}`,    // request id (in pending requests)
        method:'DELETE'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    rejectFriendshipRequest: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/response/reject/${id}`, // request id 
        method:'DELETE'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    acceptFriendshipRequest: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/response/accept/${id}`,  // request id 
        method:'PATCH'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    removeFriend: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/removeFriend/${id}`,    // user id 
        method:'DELETE'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    blockUser: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/blockAFriend/${id}`,   // user id 
        method:'PATCH'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),
    unblockUser: builder.mutation<string , {id: Number } > ({
      query: ({id})=>({
        url:`/relationship/unblockAUser/${id}`,    // user id 
        method:'PATCH'
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Relation' , id: arg.id }]
    }),

  })
});


export const {  
  useGetRelationsQuery , 
  useGetGroupUsersQuery,
  useSendFriendshipRequestMutation,
  useDeleteFriendshipRequestMutation,
  useRejectFriendshipRequestMutation,
  useAcceptFriendshipRequestMutation,
  useRemoveFriendMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useGetUserQuery 
} = relationsSlice ;


  
   


  
  // mySentRequests     (useDeleteFriendshipRequestMutation) # request id
  // myReceivedRequests (useAcceptFriendshipRequestMutation / useRejectFriendshipRequestMutation ) # request id 
  // myFriends          (useRemoveFriendMutation / useBlockUserMutation  ) # user id 
  // myBlockedList      (useUnblockUserMutation ) 
  // whoBlockedMeList   (nothing)
  