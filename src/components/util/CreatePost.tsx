import React , {useState} from 'react'
import { useAddPostMutation } from '../../features/posts/postSlice';
import { getUser } from './getUser';

type Props = {
    type: string ;// person , groupPost
    id?: number | undefined ;
};
let getURL = (type : string , id : number | undefined ):string =>{
  if(type == 'profile'){
    return  '/post/create' ;
  }
  else if(type == 'group') {
    return `/group/${id}/post`;
  }
return '';
}
const CreatePost : React.FC<Props>= ({type , id}) => {
  const user = getUser() ;
  let url = getURL(type , id ) ;
  if(!user)return;

  const [text , setText] = useState<string>("");
  const [addPost , {isLoading}] = useAddPostMutation() ; 
  const savePost = async (e : React.FormEvent<HTMLButtonElement> )=>{
        e.preventDefault() ;
        let body= {
          data: JSON.stringify({
            text:text 
          })
        };
        try{
          await addPost({url:url, body: body }).unwrap();
          setText('');
        }
        catch(err){
          console.log(err) ;  
        }
  }

  return (
    <div className="post">
        <input type="text" value={text} onChange={(e)=> setText(e.target.value) } />
        <button onClick={savePost}> Post </button>
    </div>
  )
}

export default CreatePost