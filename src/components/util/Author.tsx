import React from 'react'
import AuthorImage from './AuthorImage';
import { Link } from 'react-router-dom';

import { User } from '../../types';

type Props = {
    user: User
}

const Author:React.FC<Props> = ({ user }) => {
    let content ; 
    if(user){
        content =  <div className="author"> 
                        {/* <AuthorImage path={user.picturePath} size={'small'}/> */}
                        <Link to={`/profile/${user.id}`}>
                            <h3 className="author-name"> {user.username} </h3>
                        </Link>
                    </div>
        
    }
    else {
        content = "Loading..." ;
    }
    return (
        <>
            {content}
        </>        
    )
}

export default Author