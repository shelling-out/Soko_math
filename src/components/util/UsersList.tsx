import React , {useEffect} from 'react'
import SingleUser from './SingleUser';
import { useSearchParams } from 'react-router-dom';
import { useGetRelationsQuery, useGetGroupUsersQuery } from '../../features/relations/relationsSlice';
import { getHeaders } from './getHeaders';
import { useSelector } from 'react-redux';

type  Props = {
  type: string ;
  id?: number ;

}

const getURL = (type : string  , id: number|undefined  , status : string | null ) : string => {
    if(type == 'relations'){
        return `relationship/${status}` ;
    }
    else{
      return `/group/${id}/${status}`;
    }
}
const UsersList : React.FC<Props> = ({type,id}) => {
  
  const [searchParams ] = useSearchParams() ;
  let status = searchParams.get("status")
  let url = getURL(type , id , status ) ; 
  let users ; 
  if(type == 'relations') {
    const {data } = useGetRelationsQuery({status}) ; 
    users = data ;
  }
  else{
    const {data} = useGetGroupUsersQuery({id , type : status }) ; 
    users = data; 
  }
  let content ;
  if(users){
    content = <div>
    { 
      users?.map((user)=>{
          
          return <SingleUser user={user.User  } relation={user}></SingleUser>
      })
    }
    </div>
  }
  else{
    content = "Loading..."; 
  }
  
    
 
  return (
     <>
        {content}
     </>
  )
}
export default UsersList ;