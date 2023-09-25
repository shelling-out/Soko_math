import React, { useState ,  useRef } from 'react';
import Register from './Register';
import { useLoginMutation } from '../../features/user/userSlice';


const Auth : React.FC  = () =>{
  const modalRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null) ; 
  const spanRef = useRef<HTMLSpanElement>(null) ;
  const [login , {isLoading}] = useLoginMutation() ;

  const [email , setEmail] = useState<string>("") ;
  const [password , setPassword] = useState<string>("");
  const displayModal = ()=>{
    if(modalRef.current){
      modalRef.current.style.display = 'block' ;
    }
  }
  const Submit = async (e : React.FormEvent<HTMLButtonElement> )  => {
    e.preventDefault() ;
    try{
      await login({email,password}).unwrap();
    }
    catch(err){
      
    }
  }
  return (
    <>
      <div className="grid-container">
        <div className="grid-container-col">
            SVG
        </div>
        <div className="grid-container-col">
            <button id="myBtn" className="btn bg-blue txt-white" onClick={ displayModal } ref={btnRef}> Register</button>
            <h1>Login into your account </h1>
            <form>
              <label> Email </label>
              <input id="email" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>

              <label> Password </label>
              <input id="password" type="text" value={password} onChange={(e)=> setPassword(e.target.value )} />
              <button className='btn bg-blue txt-white' onClick={Submit} disabled={isLoading} > Login </button>
            </form>
        </div>
      </div>
      

      <Register modalRef={modalRef}  spanRef={spanRef} ></Register>

    </>
  )
};

export default Auth;

/*
  register -> success etc.. 
  login -> {user}
  state.endpoints


  
*/