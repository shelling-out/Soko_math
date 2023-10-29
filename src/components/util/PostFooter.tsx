import React from 'react'
import { 
  useAddReactionMutation,
  useUpdateReactionMutation,
  useDeleteReactionMutation,
  useAddGroupReactionMutation,
  useUpdateGroupReactionMutation,
  useDeleteGroupReactionMutation 
} from '../../features/reaction/reactionSlice';

import CommentForm from './CommentForm';

interface Props {
  postId : number ; 
  groupId : number ; 
  reaction: {
    id: number ,
    state: string
  }
}

const  PostFooter:React.FC<Props> = ({postId , groupId , reaction })=> {
  const [addReaction ] = useAddReactionMutation();
  const [updateReaction] = useUpdateReactionMutation();
  const [deleteReaction] = useDeleteReactionMutation();
  const [addGroupReaction ]  = useAddGroupReactionMutation();
  const [updateGroupReaction ] = useUpdateGroupReactionMutation();
  const [deleteGroupReaction ] = useDeleteGroupReactionMutation();
  const like = ()=>{
    interact('like') ; 
  }
  const dislike = ()=>{
    interact('dislike') ; 
  }
  const interact = (state) =>{
      let addReactionBody = {id: postId , body:{state} , postId} ;  
      let updateReactionBody = {id:reaction?.id , body:{state} , postId }
      let addGroupReactionBody = {id:reaction?.id , groupId , postId , body:{state} } ;
      let updateGroupReactionBody = {id: reaction?.id , groupId, body:{state} , postId }
      let deleteReactionBody = {id:reaction?.id  , postId  } ; 
      let deleteGroupReactionBody = {id:reaction?.id , groupId  , postId }  ; 
      let curState = reaction?.state ;
      
      if(reaction == undefined ){
        if(groupId){
          addGroupReaction(addGroupReactionBody)
        }
        else{
          addReaction(addReactionBody) ; 
        }
      }
      else{
        switch (reaction.state){  
          case 'like':
            if(state == 'like'){
                if(groupId){
                  deleteGroupReaction(addGroupReactionBody)
                }
                else{
                  deleteReaction(deleteReactionBody)
                }
            }
            else{
              if(groupId){
                updateGroupReaction(updateGroupReactionBody);
              }
              else{
                updateReaction(updateReactionBody) ;
              }
            }
            break;
          case 'dislike':
            if(state == 'dislike'){
              if(groupId){
                deleteGroupReaction(deleteGroupReactionBody)
              }
              else{
                deleteReaction(deleteReactionBody) ; 
              }
            }
            else{
              if(groupId){
                updateGroupReaction(updateGroupReactionBody);
              }
              else{
                updateReaction(updateReactionBody) ;
              }
            }
            break;
        }
      }
  }
  return (
    <div className="post-footer">
      
        <button onClick={like} className="reaction" > <h2>👍🏻</h2> </button>
        
        <button onClick={dislike}className="reaction"  > <h2>👎🏻</h2> </button>
        <CommentForm  postId={postId}  groupId={groupId} />
        
    </div>
  )
}

export default PostFooter