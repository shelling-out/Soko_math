import React from 'react'
import { User } from '../../types';
import Author from './Author';
import {
  useDeleteFriendshipRequestMutation,
  useRejectFriendshipRequestMutation,
  useAcceptFriendshipRequestMutation,
  useRemoveFriendMutation,
  useBlockUserMutation,
  useUnblockUserMutation  } from '../../features/relations/relationsSlice';
import { useDispatch } from 'react-redux';

type Props = {
    user: User
    relation: {
      id: Number ,
      state: String 
    }
}




const SingleUser : React.FC<Props> = ({user , relation }) => {
  const [deleteFriendshipRequest] = useDeleteFriendshipRequestMutation() ;
  const [rejectFriendshipRequest] = useRejectFriendshipRequestMutation() ;
  const [acceptFriendshipRequest] = useAcceptFriendshipRequestMutation();
  const [removeFriend ] =   useRemoveFriendMutation();
  const [blockUser] = useBlockUserMutation() ;
  const [unblockUser] =  useUnblockUserMutation() ; 
  let states = {
    'pending': [{id: 0 , name: 'cancel' , mutation: deleteFriendshipRequest , type:'relation'}] ,
    'blocked': [{id: 0 , name:'unblock' , mutation: unblockUser , type:'user'}      ] , 
    'friends': [{id: 0 , name:'remove friendship' , mutation: removeFriend , type:'user'} , {id: 1 , name:'block' , mutation:blockUser , type:'user'}] ,
    'received':[{id: 0 , name:'accept' , mutation: acceptFriendshipRequest , type:'relation'} , {id: 1 , name:'reject' , mutation: rejectFriendshipRequest , type:'relation'}]
  };
  const changeRelation = (e)=>{
    e.preventDefault() ;
    let id = e.target.value ; 
    console.log('in') ;
    const {type , mutation }= states[relation.state][id] ; 
    console.log('out') ;
    try{
      
      let reqId = type == 'user' ? user.id : relation.id ;
      useDispatch(  mutation(  { id: reqId }    ) ).unwrap() ;
      console.log(reqId) ;
    }
    catch(err){
      console.log(err) ;
    }
  }
  return (

        <div className="post white-blue-theme"> 
            <Author user={user} />
            {
              states[relation.state]?.map(obj => {

                return (<>

                  <form>
                    <button value={obj.id} onClick={changeRelation} className="dark-blue-theme" > {obj.name} </button>
                  </form>
                </>)
              })
            }
        </div>
  )
}

export default SingleUser