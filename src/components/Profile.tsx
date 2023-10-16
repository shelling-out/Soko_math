import React from 'react'
import ProfileHeader from './util/ProfileHeader';
import { useParams } from 'react-router-dom';
import PostsList from './util/PostsList';

type Props = {}

const Profile = (props: Props) => {
  let {id} = useParams() ;
  id = (id ||  localStorage.getItem('id'));
  
  return (
        <>
            <ProfileHeader userId={Number(id)}></ProfileHeader>
            <PostsList  type={'user'} id={Number(id)}></PostsList>
            
        </>

  )
}
export default Profile ; 