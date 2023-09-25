import React from 'react'
import { UsersListProps } from '../types'
import SingleUser from './SingleUser';

const Users : React.FC<UsersListProps> = ({type ,status , page }) => {

  // useGetUsers .. with switch or whatever
  // selectoUsersIds()
  type ;status;page; 
  let usersIds : number[] = [] ;
  return (
      <div>
          {
            usersIds.map((userId)=>{
                return <SingleUser userId={ userId }></SingleUser>
            })
          }
      </div>
  )
}
export default Users ;