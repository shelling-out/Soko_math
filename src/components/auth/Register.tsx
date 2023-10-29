import React, { RefObject , useState } from 'react';
import { useRegisterMutation } from '../../features/auth/userSlice';
import { useNavigate } from 'react-router-dom';
interface PropsTypes  {
    modalRef: RefObject<HTMLDivElement>;
    spanRef: RefObject<HTMLSpanElement>;
};


const Register : React.FC<PropsTypes> = ( {modalRef , spanRef }) =>{

  const [email, setEmail ] = useState<string>("");
  const [password, setPassword ] = useState<string>("");
  const [username, setUsername ] = useState<string>("");
  const [confirmPassword, setConfirmPassword ] = useState<string>("");
  const [error , setError] = useState<string[]>([]) ;
  const [register , {isLoading} ] = useRegisterMutation(); 

  const hideModal = ()=>{
    console.log(modalRef) ;
    // if(modalRef){
      modalRef.current.style.display = 'none' ;
    // }
  }
  const Submit = async (e: React.FormEvent<HTMLButtonElement> ) : Promise<void> =>{
    e.preventDefault() ;
    if(password !== confirmPassword){
        setError([...error,'password & confirmation unmatched']) ;
        return ;
    }
    try{
      let content:any = {
        email,password ,username
      };
      content= JSON.stringify(content) ;
      content = {
        data: content
      }
      let response  = await register(content).unwrap() ;
      if(response.status != 200 ){
          let errors = Object.keys(response.data) ; 
          let Errors = [] ; 
          for(let i= 0 ;i < errors.length ;i++){
              Errors.push(...errors[i]) ;
          }
          setError([...error , ...Errors]) ;
      }
      else{
          hideModal();
      }
    }
    catch(err){
      
    }
  }
  
  return (
    <>
        <div id="myModal" className="modal" ref={modalRef}>
          <div className="modal-content">
            <form>
                <div className="field">
                    <div>
                        <label> Name </label>
                    </div>
                    <input id="name" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/> 
                </div>
                <div className="field">
                    <div>
                        <label> Email </label>
                    </div>
                    <input id="name" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <div>
                        <label> Password </label>
                    </div>
                    <input id="name" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <div>
                        <label> Confirm Password </label>
                    </div>
                    <input id="name" type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </div>
                <button onClick={Submit}> Submit </button>
                <div className="error-msg">
                  {error}
                </div>
            </form>
            <div>
              SVG
            </div>
            <span className="close" onClick={hideModal} ref={spanRef}> &times; </span>
          </div>
        </div>
    </>
  )
};

export default Register ;

