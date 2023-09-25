import React from 'react'
import { User } from '../types';
import Author from './AuthorImage';
import { Link } from 'react-router-dom';

type Props = {
    userId:number; 
}

const SingleUser : React.FC<Props> = ({userId}) => {
 // dispatch (userId) ;
 // let user = selectUserById(userId) ;
  let user: User ;
  return (
        <div className="user"> 
            <Author userId={userId} ></Author>
        </div>
  )
}

export default SingleUser