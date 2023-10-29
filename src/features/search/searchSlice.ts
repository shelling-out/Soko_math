import { apiSlice } from "../api/apiSlice";

import { User } from "../../types";

export const searchSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<[], {query:string}> ({ 
      query: ({query}) => ({
        url:`/home/search?text=${query}`
      })
    })
  })
});


export const {  
    useGetSearchResultsQuery
} = searchSlice ;