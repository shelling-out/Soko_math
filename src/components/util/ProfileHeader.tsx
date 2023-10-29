import React from 'react'
import AuthorImage from './AuthorImage';
import { useGetUserQuery } from '../../features/relations/relationsSlice';
import { useDeleteProfileMutation } from '../../features/auth/userSlice';

import { Link } from 'react-router-dom';
import { getUser } from './getUser';
type Props = {
    userId:number; 
}

const ProfileHeader:React.FC<Props> = ({userId}) => {
  
  let {data: user } = useGetUserQuery({id:userId}) ; 
  const [deleteProfile ] = useDeleteProfileMutation() ; 
  const deleteAccount = async ()=>{
    try{
        
        await deleteProfile({id:getUser().id}).unwrap() ;
        localStorage.clear() ;

    }catch(err){
      console.log(err) ; 
    }
  }
  let content ;
  if( user ) {
    content = <div className="profile-header white-blue-theme post">
                <AuthorImage path={user.picturePath} size={'big'}/>
                <h3> Username: {user.username } </h3>
                <h4> Name: {`${user.firstName} ${user.lastName}`} </h4>
                <h4> Birthday: {user.birthday} </h4>
                {
                  getUser().id == userId?
                  <>
                    <button className="yellow-theme">
                      <Link to={`/profile/edit`} > 
                        Edit Your Profile
                      </Link>
                    </button>
                    <button onClick={deleteAccount} className="red-theme"> Delete Account </button>
                  </>
                  :
                  ""
                }
              </div>;
  }
  else{
    content = "Loading..." ;
  }
  return (
    <>
      {
        content 
      }
    </>
    
  )
}

export default ProfileHeader