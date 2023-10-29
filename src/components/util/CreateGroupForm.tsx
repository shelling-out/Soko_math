import React , {useState } from 'react'
import {  useAddGroupMutation , useEditGroupMutation } from '../../features/groups/groupsSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
type Props = {
    type: string ;
}

const CreateGroupForm : React.FC<Props>  = ({type}) => {
  const [ name , setName ] = useState<string>("") ;
  const [ desc , setDesc ] = useState<string>("") ;

  const [addGroup ] = useAddGroupMutation() ; 
  const [editGroup] = useEditGroupMutation() ; 
  const {groupId} = useParams() ;

  const submit = (e)=>{
        e.preventDefault() ;
        let body = {
            groupName: name , 
            groupDescription: desc
        }
        try{
            if(type == 'create'){
                useDispatch(addGroup({body})).unwrap() ;
            }
            else{
                useDispatch( editGroup({id:groupId, body})).unwrap() ;
            }
        }
        catch(err){
            console.log(err) ;
        }

  }
  return (
    <>
    <div className="white-blue-theme post">
        
            <div className="field">
                <input placeholder='Enter group name' value={name} onChange={(e)=>setName(e.target.value)} />
                
            </div>
            <div className="field">
                <input placeholder='Enter group descrption' value={desc}  onChange={(e)=>setDesc(e.target.value)} />

            </div>
            <button onClick={submit} className="white-blue-theme txt-bg-1" > create  </button>
    </div>
    </>
  )
}
export default CreateGroupForm ; 