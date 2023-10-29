import React from 'react'
import PostsList from './util/PostsList'
import GroupsList from './util/GroupsList'
import CreateGroupForm from './util/CreateGroupForm'

type Props = {}

const Groups = (props: Props) => {
  
  return (
    <>
      
        <CreateGroupForm type={"create"}></CreateGroupForm>
        <GroupsList ></GroupsList>
    </>
  )
}
export default Groups ; 