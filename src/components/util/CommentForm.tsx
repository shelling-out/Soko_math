import React , {useState} from 'react'
import { useAddCommentMutation, useAddGroupCommentMutation } from '../../features/comment/commentSlice';
import { useDispatch } from 'react-redux';
interface Props {
    postId: number ; 
    groupId: number ; 
}
const  CommentForm :  React.FC<Props> = ({postId , groupId }) =>   {
    const [comment , setComment ] = useState<string>("") ; 
    const [addComment ] = useAddCommentMutation() ; 
    const [addGroupComment] = useAddGroupCommentMutation() ;

    const submitComment = (e)=>{
        e.preventDefault() ; 
        try{
            if(groupId){
                useDispatch(addGroupComment({groupId , postId , body:{text:comment} })).unwrap() ;
            }else{
                useDispatch(addComment({id:postId , body:{text:comment }})).unwrap() ; 
            }
            setComment('') ;
        }
        catch(err){
            console.log(err) ;
        }
    }
  return (  
    <>
        <form >
            <textarea placeholder='Write a comment' value={comment} onChange={(e)=> setComment(e.target.value)} /> 
            <button onClick={submitComment} className="dark-blue-theme"> Comment💬 </button>
        </form>
    </>
  )
}

export default CommentForm ;