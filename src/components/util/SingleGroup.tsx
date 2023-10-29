import React , {useEffect} from 'react'
import { useDeleteGroupMutation } from '../../features/groups/groupsSlice';
import { Link } from 'react-router-dom';
import { Group } from '../../types';
import { useDispatch } from 'react-redux';



type Props = {
    groupId: number; 
    group: Group
}

const SingleGroup: React.FC<Props> = ({group , groupId}) => {

    const [ deleteGroup ] = useDeleteGroupMutation() ; 
    const Delete  = ()=>{
        
        try{
            useDispatch(deleteGroup( {id:group.id} )).unwrap() ;
        }
        catch(err){
            console.log(err) ;
        }
    }
    let content ;
    if(group){
        content =   (
        <>
        <div className='white-blue-theme post'>
                    <Link to={`/group/${groupId}`}>
                        <h1 className='blue'> {group.groupName} </h1>
                    </Link>
                    <h2> {group.groupDescription} </h2>
                    {
                        group.GroupUser.state == 'Owner' || group.GroupUser.state == 'Admin' ?
                        <button onClick={Delete} className="red-theme txt-bg-1"> delete </button>:
                        ""
                    }
        </div>                    
        </> )
    }
    else{
        content = <h1>"loading..."</h1>;
    }
    return (
        <>
        <div className="group">
            {
                content
            }
        </div>
        </>
  )
}
export default SingleGroup ;