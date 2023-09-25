import React from 'react'
import { Endpoint , Post } from '../types';
import SinglePost from './SinglePost';

const Posts:React.FC<Endpoint> = ({type , id }) => {
  // dispatch(type  , id ) ;
  let posts  : number[] = [] ;
  switch(type){
    case 'news':
        //const {isLoading} = useGetNewsPosts();
        //posts =  selectGetNewsPostsIds() ;
        break;
    case 'group':
        //const {isLoading} = useGetGroupPosts();
        //posts =  selectGetGroupPostsIds() ;
        break;
    case 'user':
        //const {isLoading} = useGetUserPosts();
        //posts =  selectGetUserPostsIds() ;
        break;
  }
  // switch for selecting the posts

  return (
    <>
    <div className="posts-list">

        {
            posts.map(post=>{
                return  (<>
                    <SinglePost postId={post /* check this post or post.id */ }  /> 
                </>);
            })
        }
  
    </div>
    </> 
  )
}

export default Posts ; 