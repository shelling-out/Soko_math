import React , {useEffect} from 'react'
import { useGetGroupQuery } from '../../features/groups/groupsSlice';
import { Link } from 'react-router-dom';
import { Group } from '../../types';

import { getHeaders } from './getHeaders';
import { useSelector } from 'react-redux';

type Props = {
    groupId: number; 
    group: Group
}

const SingleGroup: React.FC<Props> = ({group , groupId}) => {

    // const {data } = useGetGroupQuery({id:groupId}) ;
    let content ;
    if(group){
        content =   (<div className="group">
                    <Link to={`/group/${groupId}`}>
                        <h1> {group.groupName} </h1>
                    </Link>
                    <h2> {group.groupDescription} </h2>
                </div> )
    }
    else{
        content = <h1>"loading..."</h1>;
    }
    return (
        <>
        {
            content
        }
        </>
  )
}
export default SingleGroup ;