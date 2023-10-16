import React , {useMemo} from 'react'
import Author from './Author'
import { Post, PostProperties } from '../../types'
import { Link, useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../features/posts/postSlice';


type Props = {
    postId:number ;
    post: PostProperties
}

const SinglePost: React.FC<Props> = ({post , postId}) => {
  const {id} = useParams();
  if(postId == null  ) {
    postId = Number(id) ; 
    const { data } =  useGetPostQuery({id:postId}) ;
    post = data ;

  }
  let content ;
  if(post == undefined ) {
    content = "Loading..." ;
  }
  else {
    content = (
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
    );
  }
  return (
    <>
    {
      content
    }
    </>
  )
}

export default SinglePost