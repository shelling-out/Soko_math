import React from 'react'
import { User } from '../../types';
import Author from './Author';

type Props = {
    user: User
}

const SingleUser : React.FC<Props> = ({user}) => {
  
  return (

        <div className="user"> 
            <Author user={user} />
        </div>
  )
}

export default SingleUser