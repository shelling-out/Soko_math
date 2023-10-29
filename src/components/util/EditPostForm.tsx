import React , {useMemo , useState  } from 'react'
import Author from './Author'
import { Link, useParams } from 'react-router-dom';
import { useEditGroupPostMutation , useEditPostMutation, useGetGroupPostQuery, useGetPostQuery} from '../../features/posts/postSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
type Props = {
    type: string 
}

const EditPostForm: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ; 
  const {postId ,  groupId } = useParams();
  
  const [ editPost ] =  useEditPostMutation() ;
  const [ editGroupPost ] = useEditGroupPostMutation() ; 
  let oldPost ;
  if(type == 'news') {
    const {data} = useGetPostQuery({id:postId}) ;
    oldPost = data ;
  }
  else{
    const {data} = useGetGroupPostQuery({postId , groupId}) ;
    oldPost = data;
  }
  const [text , setText ]  =useState<string>(oldPost?.text) ; 

  const submit = async (e)=>{
      e.preventDefault();
      let body = {
        data: JSON.stringify({text})
      };
      try{
          if(type == 'news'){
            await editPost({body , id:postId}).unwrap() ;
            navigate(`/post/${postId}`) ;
          }
          else{
            await editGroupPost({body , postId , groupId }).unwrap();
            navigate(`/group/${groupId}/${postId}`) ;
          }

      }
      catch(err){
        console.log(err) ; 
      }
  }
  let content  = (
      <>
        <Link to={`/post/${postId}`}>
        </Link>
        <form>
          <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
          <button onClick={submit} className='white-blue-theme txt-bg-1'> Submit  </button>
        </form>
        {/*  
          <PostFooter/> (like , disklike , comments  )
          <ReactionCount>
          <CommentCount>
        */}
        </>
    );
  
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

export default EditPostForm ;