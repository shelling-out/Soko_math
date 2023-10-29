import React from 'react' ;
import {useForm} from 'react-hook-form' ;
import { useEditProfileMutation } from '../../features/auth/userSlice';

import { getUser } from './getUser';
import { useNavigate } from 'react-router-dom';

const EditProfile : React.FC = () =>{
    const {register , handleSubmit } = useForm(); 
    const [editProfile ] = useEditProfileMutation() ;
    const navigate = useNavigate() ;
    const submit = async (data)=>{
        Object.keys(data).forEach((k)=> (data[k] == null || data[k] == '') && delete data[k]  ) ; 
        let body = {data:JSON.stringify(data)};
        try{
            await editProfile({body,id:getUser().id}).unwrap() ;
            navigate('/profile');
        }
        catch(err){
            console.log(err) ; 
        }
    }

    return (
      <>
        <form onSubmit={handleSubmit(submit)} className="post">
            <div className="field flex-container">
                  <label> Username </label>
                  <input placeholder='username' {...register("username")}  /> 
            </div>
            <div className="field flex-container">
                  <label> Email </label>
                  <input  placeholder='example@email.com' {...register('email')} />
            </div>
            <div className="field flex-container">
              <label> Gender </label>
              <select  {...register('gender')} className="input">
                  <option value=""> </option>
                  <option value="M"> Male </option>
                  <option value="F"> Female </option>
              </select>
            </div> 
            <div className="field flex-container">
                  <label> First name </label>
                  <input placeholder='Your first name'  {...register('firstName')} />
            </div>
            <div className="field flex-container">
                  <label> Last name </label>
                  <input  placeholder='Your last name' {...register('lastName')} />
            </div>
            <div className="field flex-container">
                  <label> Country </label>
                  <input placeholder='Country name' {...register('country')} />
            </div>
            <div className="field flex-container">
                  <label> Birthday </label>
                  <input  placeholder='Date of Birth' {...register('birthday')} type='date' />
            </div>
            <button className="white-blue-theme"> submit </button>
        </form>  
      </>
    )
  };

export default  EditProfile ;