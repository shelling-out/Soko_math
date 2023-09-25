import React from 'react'
import { Group } from '../types'

type Props = {
    groupId: number; 
}

const SingleGroup: React.FC<Props> = ({groupId}) => {
    // dispatch = useGetGroupQuery(groupId) ;
    // let group:Group = selectGroup
    let group :Group ;
  return (
        <div className="group">
            <h1> {group.groupName} </h1>
            <h2> {group.groupDescription} </h2>
        </div>
  )
}
export default SingleGroup ;