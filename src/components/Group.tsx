import React from 'react'
import { useParams } from 'react-router-dom'
import CreatePost from './util/CreatePost';
import PostsList from './util/PostsList';
import {Routes , Route  } from 'react-router-dom' ;
import UsersList from './util/UsersList';
import SinglePost from './util/SinglePost';
import CreateGroupForm from './util/CreateGroupForm';
type Props = {}

const Group  = (props: Props) => {
  let {groupId} = useParams() ;
  
  return (
    <>  
    <Routes>
        <Route path="/" element={<><CreatePost type={'group'} id={groupId} /><PostsList type="group" id={Number(groupId)} /></>}/>
        <Route path="/users" element={<UsersList type={'group'} id={Number(groupId)}/>} />
        <Route path="/post/:postId" element={<SinglePost type={'group'} />} />
        <Route path="/edit" element={<CreateGroupForm type={'edit'}/>} />

    </Routes>
    </>
  )
}

export default Group