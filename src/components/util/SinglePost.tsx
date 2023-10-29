import React , { useMemo , useState } from 'react'
import Author from './Author'
import { Post, PostProperties } from '../../types'
import { Link, useParams } from 'react-router-dom';
import { getUser } from './getUser';
import { useDeletePostMutation , useDeleteGroupPostMutation , useGetPostQuery ,  useGetGroupPostQuery  } from '../../features/posts/postSlice';
import { useDispatch } from 'react-redux';
import PostFooter from './PostFooter';
import Comment from './CommentForm';
import CommentsList from './CommentsList';
type Props = {
    postId?:number ;
    post?: PostProperties;
    type: string ;
}

const SinglePost: React.FC<Props> = ({post , postId , type }) => {
  let [deleteGroupPost] = useDeleteGroupPostMutation() ; 
  let [deletePost] = useDeletePostMutation() ;
  const {postId:postIdParam , groupId} = useParams();
  
  if(post == null || postId == null  ) {
    postId = Number(postIdParam) ;
    if(type != 'group' ){
        const { data } =  useGetPostQuery({id:postId}) ;
        post = data ;
    }
    else{
      const { data } =  useGetGroupPostQuery({groupId, postId  }) ;
      post = data ;
    }
  }
  
  console.log(post , postId) ;
  const Delete = (e)=>{
    e.preventDefault() ; 
    try{
      if(type != 'group') {
        useDispatch(deletePost({id:postId})).unwrap() ; 
      }
      else{
        useDispatch(deleteGroupPost({postId , groupId})).unwrap() ;
      }
    }
    catch(err){
      console.log(err) ; 
    }
  }
  
  let content ;
  
  
  if(post == undefined ) {
    content = "Loading..." ;
  }
  else {
      
    content = (
      <>
        <div  className="flex-container" >
          <Author user={post.User} />
          {
            /* make it dropdown */
          }
        {
          post?.User?.id == Number(getUser().id) ?
          <div>
            
            <button className="yellow-theme"> <Link to={`/post/${postId}/edit`}> edit </Link> </button>
            <button onClick={Delete} className="red-theme"> delete </button>
          </div>
          :
          ""
        }
        </div>
        {
          type == 'news' ? 
          <Link to={`/post/${postId}`}>
                <h3 className="post-contnet"> {post.text} </h3>  
          </Link>:
          <Link to={`/group/${groupId}/post/${postId}`} >
                <h4 className='post-content'> {post.text} </h4>
          </Link>
          

        }
      
        <PostFooter postId={post.id} reaction={post.reaction} groupId={groupId} />
        <CommentsList comments={post.Comments}  postId={postId} groupId={groupId} /> 
        {/*  
          <ReactionCount>
          <CommentCount>

        */}
        </>
    );
  }
  return (
    <>
      <div className='post white-blue-theme'>
        {
          
          content
        }
      </div>
    </>
  )
}

export default SinglePost