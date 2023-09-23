import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

let base:string = 'http://127.0.0.1:3500' ; 
let URL:string = `${base}/api/` ; 
export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl: URL }) ,
    tagTypes:[],
    endpoints: builder => ({})
});
