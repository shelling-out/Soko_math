import { apiSlice } from "../api/apiSlice";


export const commentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation ({
        query:({id ,body }) => ({
            url:`/comment/add/${id}`,
            method:'POST' ,
            body: body
        }),
        invalidatesTags: (result , err , arg) =>  [{type:'Post' , id:arg.id } , {type:'Comment' , id:'LIST'}]
    }),
    deleteComment: builder.mutation ({
        query:({id , postId }) => ({
            url:`/comment/delete/${id}`,
            method:'DELETE' , 
        }),
        invalidatesTags: (result , err , arg) => [{type:'Comment' , id: arg.id } , {type:'Post' , id:arg.postId} ] 
    }),
    updateComment: builder.mutation ({
        query:({id ,body }) => ({
            url:`/comment/edit/${id}`,
            method:'PATCH' , 
            body: body
        }),
        invalidatesTags: (result , err , arg) => [{type:'Comment' , id:  arg.id  } , {type:'Post' , id:arg.postId} ] 
    }),
    getComment: builder.query ({
        query: ({id}) => ({
            url:`/comment/${id}` 
        }),
        providesTags: (result , err ,arg ) =>  result ? [ {type:'Comment' , id: result.id}] : []
    }),

    addGroupComment: builder.mutation ({
        query:({postId , groupId ,body }) => ({
            url:`/group/${groupId}/comment/${postId}`,
            method:'POST' , 
            body: body
        }),
        invalidatesTags: (result , err , arg) =>  [{type:'GroupPost' , id:arg.postId } , {type:'Comment' , id:'LIST'}]
    }),
    deleteGroupComment: builder.mutation ({
        query:({id , groupId }) => ({
            url:`/group/${groupId}/comment/${id}`,
            method:'DELETE' , 
        }),
        invalidatesTags: (result , err , arg) =>  [{type:'GroupPost' , id:arg.postId } , {type:'Comment' , id:'LIST'}]
    }),
    updateGroupComment: builder.mutation ({
        query:({id , groupId ,body }) => ({
            url:`/group/${groupId}/comment/${id}`,
            method:'PATCH' , 
            body: body
        }),
        invalidatesTags: (result , err , arg) =>  [{type:'GroupPost' , id:arg.postId } , {type:'Comment' , id:'LIST'}]
    }),
    getGroupComment: builder.query ({
        query: ({ id , groupId} ) => ({
            url:`/group/${groupId}/comment/${id}` 
        }),
        providesTags:(result , err , arg)  => result ? [{type:'GroupPost' , id:  result.id }]: []
    }),
  })
});


export const {  
    useAddCommentMutation ,
    useDeleteCommentMutation ,
    useUpdateCommentMutation , 
    useGetCommentQuery , 
    useAddGroupCommentMutation,
    useDeleteGroupCommentMutation,
    useUpdateGroupCommentMutation,
    useGetGroupCommentQuery
} =  commentSlice ;