import React, { useEffect } from 'react'
import SingleGroup from './SingleGroup'

import { Group } from '../types'
import { useSearchParams } from 'react-router-dom'
import { getHeaders } from './getHeaders'
import { useSelector } from 'react-redux'
import { useGetMyGroupsQuery } from '../../features/groups/groupsSlice'
type Props = {}

const GroupsList: React.FC<Props> = () => {
  const {data: groups } = useGetMyGroupsQuery({});
  
  let content ; 
  if(groups){
    content = groups?.map((group)=>{
            return (
                <>
                  <SingleGroup group={group} groupId={group.id} />
                </>
            )
        });
  }
  else{
    content = "No Groups to show " ; 
  }
    
  return (
        <div className="groups-list">
            {
                content
            }
        </div>
  )
}
export default GroupsList ;