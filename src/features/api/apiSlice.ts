import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/store';

let base:string = 'http://127.0.0.1:3500' ; 
let URL:string = `${base}/api/` ; 
export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
            baseUrl: URL , 
            prepareHeaders: (headers , {getState}) =>{ 
                // const token = (getState() as RootState ).user.token ; 
                const token  = localStorage.getItem('token') ;
                headers.set('Authorization' , token ) ;
                return headers ; 
            }
    }),
    tagTypes:['Post' , 'GroupPost' , 'Comment' , 'Relation'],
    endpoints: builder => ({}),

});
