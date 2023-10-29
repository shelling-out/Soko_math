import React , {useState} from 'react'

import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useUpdateCommentMutation , useUpdateGroupCommentMutation } from '../../features/comment/commentSlice'
import { useDispatch } from 'react-redux'
interface Props{

}
const  EditCommentForm : React.FC<Props>  = ({}) =>  {
    const [searchParms] = useSearchParams() ; 
    const {commentId } = useParams() ; 
    const groupId= searchParms.get('groupId') ;
    const [comment , setComment ] = useState<string>("") ;  

    const [updateComment ] = useUpdateCommentMutation( ) ; 
    const [updateGroupComment] = useUpdateGroupCommentMutation()  ;
    

    const editComment = (e)=>{
        e.preventDefault() ; 
        try{

            if(groupId != 'undefined') {
                useDispatch( updateGroupComment( {  id: commentId , groupId , body: { text: comment} }  ) ).unwrap() ; 
            }
            else{
                useDispatch(  updateComment( {id: commentId , body: {text: comment }}  )  ).unwrap()  ;
            }
        }
        catch(err){
            console.log(err) ; 
        }
    }
    return (
        <>
            <form> 
                <input value={comment} onChange={(e)=>setComment(e.target.value)} />
                <button onClick={editComment}> edit  </button> 
            </form>
        </>
    )
}
export default EditCommentForm ; 