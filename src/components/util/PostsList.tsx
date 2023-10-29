import React,{ useEffect } from 'react'
import SinglePost from './SinglePost';
import {  useGetHomePostsQuery, useGetProfilePostsQuery ,useGetGroupPostsQuery  } from '../../features/posts/postSlice';

import {  PostProperties } from '../../types';
type Props = {
    type:string ; 
    id?:number ;
};
let getCallBack = (type: string  , id :number|undefined  )  =>  {
    switch(type){
        case 'news':
            return useGetHomePostsQuery ;
        case 'group':
            return  useGetGroupPostsQuery ;
        case 'user':
            return useGetProfilePostsQuery ;
    }
    return '';
};
const PostsList:React.FC<Props> = ({type , id }) => {
    
    let callBack = getCallBack(type , id ) ;
    let {data} = callBack({id}) ;
    console.log(data) ;
    let content ;
    if(data){
        content =  data?.map( (post: PostProperties) =>{
            if(post.Post){
                post = post.Post;
            }
            return  (
                <SinglePost post={post} postId={post.id } type={type} key={post.id}/>  
            );
        } );
    }
    else {
        content = "Loading..."
    }
  return (
    <>
    <div className="posts-list">
        {
            content
        }
  
    </div>
    </> 
  )
}

export default PostsList ; 