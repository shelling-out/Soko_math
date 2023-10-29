import React, { useState ,  useRef } from 'react';
import Register from './Register';
import { useLoginMutation } from '../../features/auth/userSlice';
import { userSlice  , selectUser } from '../../features/auth/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUser } from '../../features/auth/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth : React.FC  = () =>{
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null) ; 
  const spanRef = useRef<HTMLSpanElement>(null) ;
  const [login , {isLoading}] = useLoginMutation() ;
  const [email , setEmail] = useState<string>("john@gmail.com") ;
  const [password , setPassword] = useState<string>("secretsecret");
  const dispatch = useDispatch() ;
  const user = useSelector( selectUser ) ;
  const displayModal = ()=>{
    if(modalRef.current){
      modalRef.current.style.display = 'block' ;
    }
  }
  const Submit = async (e : React.FormEvent<HTMLButtonElement> )  => {
    e.preventDefault() ;
    try{
      let res = await login({email,password}).unwrap();
      let user = { ...res.user }; 
      user.token = `Bearer ${user.token}`;
      localStorage.setItem('token' , user.token) ;
      localStorage.setItem('id' , user.id) ;
      dispatch(setUser(user));
      navigate('/') ; 
    }
    catch(err){
      console.log(err) ;
    }
  }
  return (
    <>
      <div className="grid-container">
        <div className="grid-container-col">
            SVG
        </div>
        <div className="grid-container-col">
            
            <h1>Login into your account </h1>
            <form>
              <div className="field">
                <div>
                  <label> Email </label>
                </div>
                <input id="email" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="field">
                <div>
                  <label> Password </label>
                </div>
                <input id="password" type="text" value={password} onChange={(e)=> setPassword(e.target.value )} />
              </div>
              <button className='btn bg-blue dark-blue-theme' onClick={Submit} disabled={isLoading} > Login </button>
            </form>
            <h3> You don't have an account ? </h3>
            <button id="myBtn" className="btn bg-blue dark-blue-theme" onClick={ displayModal } ref={btnRef}> Register</button>
         
        </div>
      </div>
      

      <Register modalRef={modalRef}  spanRef={spanRef} ></Register>

    </>
  )
};

export default Auth;