import React from 'react'
import { Endpoint , Post } from '../types';


const Posts:React.FC<Endpoint> = ({type , id }) => {
  // dispatch(type  , id ) ;
  let content : Post[] = [] ;
  switch(type){
    case 'news':
        //const {isLoading} = useGetNewsPosts();
        break;
    case 'group':
        //const {isLoading} = useGetGroupPosts();
        break;
    case 'user':
        //const {isLoading} = useGetUserPosts();
        break;
  }
  // switch for selecting the posts

  return (
    <>
        {
            
        }

    </> 
  )
}

export default Posts ; 