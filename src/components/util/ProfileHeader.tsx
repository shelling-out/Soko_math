import React from 'react'
import { User } from '../../types';
import AuthorImage from './AuthorImage';
import { useGetUserQuery } from '../../features/relations/relationsSlice';
import { useParams } from 'react-router-dom';

type Props = {
    userId:number; 
}

const ProfileHeader:React.FC<Props> = ({userId}) => {
  
  let {data: user } = useGetUserQuery({id:userId}) ; 

  let content ;
  if( user ) {
    content = <div className="profile-header">
                <AuthorImage path={user.picturePath} size={'big'}/>
                <h3> username: {user.username } </h3>
                <h4> name: {`${user.firstName} ${user.lastName}`} </h4>
                <h4> birthday: {user.birthday} </h4>
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