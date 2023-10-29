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
        content =  <>
                        {/* <AuthorImage path={user.picturePath} size={'small'}/> */}
                        <Link to={`/profile/${user.id}`}>
                            <h2 className="author-name"> {user.username} </h2>
                        </Link>
                </>
                    
        
    }
    else {
        content =  "Loading..." ;
    }
    return (
        <>
        <div className="author"> 
            {content}
        </div>
        </>        
    )
}

export default Author