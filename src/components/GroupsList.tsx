import React from 'react'
import { Group } from '../types'
import { useSearchParams } from 'react-router-dom'
import SingleGroup from './SingleGroup'

type Props = {}

const GroupsList: React.FC<Props> = () => {
  // get type [mine,public] = useParams() or const [searchParams, setSearchParams] = useSearchParams() ; searchParams.get("type")
  // switch for type useGetGroups{type}Query() ;
  //let groups =  selectAllGroupsIds();
  let groups: number[] =[] ; 
  return (
        <div className="groups-list">
            {
                groups.map((gorupId)=>{
                    return (
                        <>
                            <SingleGroup groupId={groupId} />
                        </>
                    )
                })
            }
        </div>
  )
}