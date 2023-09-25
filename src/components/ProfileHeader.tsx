import React from 'react'
import { User } from '../types';
import AuthorImage from './AuthorImage';
type Props = {
    userId:number; 
}

const ProfileHeader:React.FC<Props> = ({userId}) => {
  let user:User ;
  //dispatch
  return (
    <div className="profile-header">
      <AuthorImage path={user.picturePath} size={'big'}/>
      <h3> username: {user.username } </h3>
      <h4> name: {`${user.firstName} ${user.lastName}`} </h4>
      <h4> birthday: {user.birthday} </h4>
    </div>
  )
}

export default ProfileHeader