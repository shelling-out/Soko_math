import React , {useState} from 'react'

type Props = {
    type: string ;// person , groupPost
    id: number | undefined ;
};

const CreatePost : React.FC<Props>= ({type , id}) => {
  const [text , setText] = useState<string>("");
  
  const savePost = (e : React.FormEvent<HTMLButtonElement> )=>{
        e.preventDefault() ;
        // dispatch with switch .. 
        
  }

  return (
    <div className="post">
        <input type="text" value={text} onChange={(e)=> setText(e.target.value) } />
        <button onClick={savePost}> Post </button>
    </div>
  )
}

export default CreatePost