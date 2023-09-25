import React from 'react'
import { User } from '../types';
import { useRegisterMutation } from '../features/user/userSlice';
import AuthorImage from './AuthorImage';
import { Link } from 'react-router-dom';
type Props = {
    userId:number ;
}

const Author:React.FC<Props> = ({userId}) => {
  // {isLoading }= useGetUserById();
  // user = useSelector(selectUserById)
  let user:User = {
        id:1,
        username:'',
        picturePath:''
    };
    return (
        <div className="author"> 
            <AuthorImage path={user.picturePath} size={'small'}/>
            <Link to={`/profile/${userId}`}>
                <h3 className="author-name"> {user.username} </h3>
            </Link>
        </div>
    )
}

export default Author