import React , {useEffect} from 'react'
import SingleUser from './SingleUser';
import { useSearchParams } from 'react-router-dom';
import { useGetUsersQuery } from '../../features/relations/relationsSlice';
import { getHeaders } from './getHeaders';
import { useSelector } from 'react-redux';

type  Props = {
  type: string ;
  id?: number ;

}
/*
    /relationship/mySentRequests
    /relationship/myReceivedRequests
    /relationship/myFriends
    /relationship/myBlockedList
    /relationship/whoBlockedMeList
    /group/${id}/join
    /group/${id}/members
*/
const getURL = (type : string  , id: number|undefined  , status : string | null ) : string => {
    if(type == 'relations'){
        return `relationship/${status}` ;
    }
    else{
      return `/group/${id}/${status}`;
    }
}
const UsersList : React.FC<Props> = ({type,id}) => {
  // useSearchParams  to get (status ) from search query
  const [searchParams, setSearchParams] = useSearchParams() ;
  let status = searchParams.get("status")
  let url = getURL(type , id , status ) ; 
  const {data: users , isSuccess } = useGetUsersQuery({url}) ;
  let content ;
  if(isSuccess){
    content = <div>
    { 
      users.map((user)=>{
          return <SingleUser user={user.user }></SingleUser>
      })
    }
    </div>
  }
  else{
    content = "Loading..."; 
  }
  
    

  //   }
  // } , [isSuccess])
  
  return (
     <>
        {content}
     </>
  )
}
export default UsersList ;