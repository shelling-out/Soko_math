import React from 'react'
import Author from './Author'
import { Post } from '../types'
import { Link } from 'react-router-dom';
type Props = {
    postId:number ;
}

const SinglePost: React.FC<Props> = ({postId}) => {
  // const {isLoading} =  useGetPost(postId) ;
  // let post = useSelector(selectPostById , postId ) ; 
  let post : Post  ; 
  return (
    <Link to={`/post/${postId}`}>
    <div className='post'>
        <Author userId={post.userId}/>
        <h3 className="post-contnet"> {post.text} </h3>  
        
        {/*  
        <PostFooter/> (like , disklike , comments  )
             <ReactionCount>
             <CommentCount>
        */}
    </div>
    </Link>

  )
}

export default SinglePost