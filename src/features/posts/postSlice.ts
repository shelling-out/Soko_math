import { apiSlice } from "../api/apiSlice";
import { PostProperties } from "../../types";
import { Post  , Posts} from "../../types";

export interface PostRequest {
  id?:number ; 
  postId?: number ;
  groupId?: number; 
  url?:string;
  body?: {
    data:string
  } ;
};

export const postsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomePosts : builder.query<PostProperties[],PostRequest>({
        query: ( {} ) => ({
            url: `/home/news`
        }),
        transformResponse:(res)=>{
            return res.posts ;
        },
        providesTags:  (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), {type:'Post' , id:'LIST'}]
          : ['Post']
    }),
    getGroupPosts : builder.query<PostProperties[],PostRequest>({
        query: ( {id }) => ({
            url: `/group/${id}/post`
        }),
        transformResponse:(res)=>{
            return res.posts ;
        },
        providesTags:(result, error, arg) =>
        result
          ? [...result.map(({ Post }) => ({ type: 'GroupPost' as const, id:Post.id })), {type:'GroupPost' , id:'LIST'}]
          : ['GroupPost']
    }),
    getProfilePosts : builder.query<PostProperties[],PostRequest>({
      query: ( {id } ) => ({
          url: `/post/all/${id}` , 
      }),
      transformResponse:(res)=>{
          return res.posts ;
      },
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), {type:'Post' , id:'LIST'}]
        : ['Post'],
    }),

    getPost: builder.query<PostProperties , PostRequest> ({
      query: ( {id}) => ({
        url: `/post/${id}` ,
        method:'GET',
      }),
      transformResponse: (res ) =>{
        if(res.post)
          return res?.post ;
        else
          return res; 
      },
      providesTags: (result, error, arg) => result ? [{type:'Post' as const , id:result.id}] : []
    }),
    addPost: builder.mutation<PostProperties ,PostRequest> ({
      query: (request: PostRequest ) => ({
        url:request.url ,
        method:'POST',
        body:request.body
      }),
      invalidatesTags:(result , err , arg ) =>  {
        if(arg.url == '/post/create')
          return [{type:'Post' , id:'LIST'}] 
        else{
          return [{type:'GroupPost' , id:'LIST'}] 
        }
      } 
    }),
    deletePost:builder.mutation< string , PostRequest > ({
      query: (request:PostRequest) => ({
        url: `/post/delete/${request.id}`,
        method:'DELETE',
      }),
      invalidatesTags: (result ,err , arg ) =>  [{type:'Post' , id: arg.id}]
    }),
    editPost: builder.mutation< string , PostRequest> ({
      query: (request:PostRequest) => ({
        url: `/post/edit/${request.id}`,
        method:'PATCH',
        body: request.body,
      }),
      invalidatesTags:(result , err , arg ) => [{type:'Post' , id: arg.id }]
    }), 
    editGroupPost: builder.mutation< string , PostRequest> ({
      query: (request:PostRequest) => ({
        url:`/group/${request.groupId}/post/${request.postId}`,
        method:'PATCH',
        body: request.body,
      }),
      invalidatesTags: (result , err , arg )  => [{type:'GroupPost' , id: arg.postId}]
    }),
    deleteGroupPost:builder.mutation< Post , PostRequest > ({
      query: (request:PostRequest) => ({
        url: `/group/${request.groupId}/post/${request.postId}`,
        method:'DELETE',
      }),
      invalidatesTags:(result , err , arg) => [{type:'GroupPost' , id: arg.postId }] 
    }),
    getGroupPost : builder.query< Post , PostRequest > ({
      query: (request: PostRequest) => ({
        url: `/group/${request.groupId}/post/${request.postId}`,
      }),
      transformResponse: (res  ) =>{
        return res.post ;
      },
      providesTags: (result , err , arg ) =>  result ? [ {type:'GroupPost' , id: result.id }]: []
    })
  }),
});


export const { 
  useGetHomePostsQuery , 
  useGetProfilePostsQuery,
  useGetGroupPostsQuery,
  useGetPostQuery , 
  useAddPostMutation , 
  useDeletePostMutation ,
  useEditPostMutation ,
  useEditGroupPostMutation ,
  useDeleteGroupPostMutation,
  useGetGroupPostQuery
} = postsSlice ;
