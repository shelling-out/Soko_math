import React from 'react' ; 
import { Comment } from '../../types';
import { getUser } from './getUser';
import { Link } from 'react-router-dom';
import { useDeleteCommentMutation  , useDeleteGroupCommentMutation } from '../../features/comment/commentSlice';
import { useDispatch } from 'react-redux';

interface Props {
    comments: Comment[]
};
const CommentsList : React.FC<Props>  = ({comments , groupId , postId }) => { 
    const [deleteComment_ ] = useDeleteCommentMutation()  ;
    const [deleteGroupMutation  ] = useDeleteGroupCommentMutation() ; 

    const deleteComment = (e)=>{
        try{            
            if(groupId){
                useDispatch( deleteGroupMutation( {  id:e.target.value , groupId , postId})  ).unwrap() ; 
            }
            else{
                useDispatch(  deleteComment_( { id: e.target.value , postId}) ).unwrap() ; 
            }
        }
        catch(err){
            console.log(err) ; 

        }
    }
    return (
        <>
            <div className="comments-list" >
                {
                    comments?.map((comment) =>{ 

                        return (<div className="comment">

                            <h4>{  comment.text  } </h4>
                            {
                                comment.User.id == getUser().id ? 
                                <>
                                    <button onClick={deleteComment} className="red-theme" value={comment.id}> delete </button>
                                    <Link to={`/comment/edit/${comment.id}?groupId=${groupId}`} className='yellow-theme'> edit </Link>
                                </>:
                                ""
                            }
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default CommentsList ; 