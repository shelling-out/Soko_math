import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector  } from "@reduxjs/toolkit";
import { Group } from "../../types";

export interface GroupsRequest {
  id?:number ; 
  url?:string;
  body?: {
    data:string
  };
};
interface GroupRequestProps {
  groupName?: string ; 
  groupDescription?:string ; 
}
interface GroupsResponse {
  groups: Group[]
}
interface GroupResponse {
  group: Group
};

export const groupsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyGroups  : builder.query<GroupsResponse,GroupsRequest>({
        query: () => ({
            url: '/group/my',
        }),
        transformResponse:( res: GroupsResponse  ) =>{
            return res.groups ;
        },
        providesTags: (result , err , arg ) => 
        result ? 
        [...result.map(({id})=> ({type:'Group' as const , id })) , {type:'Group' as const , id:'LIST'}] : 
        [{type:'Group' , id:'LIST'}] 
    }),
    getGroup: builder.query<GroupResponse,GroupsRequest>({
        query: ( {id })  => ({
            url: `/group/${id}`,
        }),
        transformResponse:( res ) =>{
            
            return res.group ; 
        },
        providesTags: (result , err , arg ) => result ? [{type:'Group' , id: result.id}] : []
    }),
    addGroup: builder.mutation<GroupResponse , {body:GroupRequestProps}> ({
        query: ({body})=>({
          url:`/group/`,
          method:'POST',
          body: body
        }),
        invalidatesTags: [{type:'Group' , id:'LIST'}] 
    }),
    editGroup: builder.mutation<GroupResponse , {body: GroupRequestProps, id:number } > ({
        query:({body , id } )=>({
            url: `/group/${id}`,
            method:'PATCH',
            body:body
        }),
        invalidatesTags: (result , err , arg ) => [{type:'Group' , id: arg.id}] 
    }),
    deleteGroup: builder.mutation<GroupResponse,  {id:number} > ({
      query: ({id}) =>({
        url:`/group/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:(result , err ,arg ) => [{type: 'Group' , id: arg.id}] 
    }),
    sendJoinRequest: builder.mutation ({
      query: ({id} ) =>({
        url:`/group/${id}/join`,
        method:'POST'
      })
    })
  }),
});


export const {  
  useGetMyGroupsQuery ,
  useGetGroupQuery  , 
  useAddGroupMutation ,
  useDeleteGroupMutation , 
  useEditGroupMutation ,
  useSendJoinRequestMutation 
} = groupsSlice ;


