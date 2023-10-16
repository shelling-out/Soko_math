import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector  } from "@reduxjs/toolkit";
import { Group } from "../../types";

export interface GroupsRequest {
  id?:number ; 
  url?:string;
  body?: {
    data:string
  } ;
};
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
        }
    }),
    getGroup: builder.query<GroupResponse,GroupsRequest>({
        query: ( {id })  => ({
            url: `/group/${id}`,
        }),
        transformResponse:( res ) =>{
            console.log(res) ;
            return res.group ; 
        }
    }),
  }),
});


export const {  useGetMyGroupsQuery , useGetGroupQuery } = groupsSlice ;

