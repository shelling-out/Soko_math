import React,{ useEffect } from 'react'
import SinglePost from './SinglePost';
import {  useGetPostsQuery  } from '../../features/posts/postSlice';
import { selectUser } from '../../features/auth/userSlice';
import { getUser } from './getUser';
import {  PostProperties } from '../../types';
type Props = {
    type:string ; 
    id?:number ;
};
let getURL = (type: string  , id :number|undefined  ): string =>  {
    switch(type){
        case 'news':
            return '/home/news';
        case 'group':
            return  `/group/${id}/post`
        case 'user':
            return `/post/all/${id}`
    }
    return '';
};
const PostsList:React.FC<Props> = ({type , id }) => {
    let url = getURL(type , id ) ;
    let {data} = useGetPostsQuery({url: url }) ;
    let content ;
    if(data){
        content =  data?.map( (post: PostProperties) =>{
            return  (
                <SinglePost post={post} postId={post.id }  key={post.id}/> 
            );
        } );
    }
    else {
        content = "Loding..."
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