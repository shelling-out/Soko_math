import React from 'react'
import { useParams } from 'react-router-dom'
import CreatePost from './util/CreatePost';
import PostsList from './util/PostsList';
import {Routes , Route  } from 'react-router-dom' ;
import UsersList from './util/UsersList';
type Props = {}

const Group  = (props: Props) => {
  let {id} = useParams() ;

  return (
    <>
    <CreatePost type={'group'} />
    <Routes>
        <Route path="/" element={<PostsList type="group" id={Number(id)} />}/>
        <Route path="/members" element={<UsersList type={'group'} id={Number(id)}/>} />
        
    </Routes>
    </>
  )
}

export default Group