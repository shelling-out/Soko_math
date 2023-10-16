import React from 'react'

type Props = {
    path:string ;
    size:string ;
}

const AuthorImage:React.FC<Props> = ({path , size}) => {
  // imageAsBase64 = useGetUsersPhotos();
  // image = useSelector(selectPhotoById); (pass user id ) in params 

  return (
    /*
      <img src={`${data:image/png;base64, ${image}`}  alt="user photo" className="author-photo" />

      // or check another way other than base64

    */  
    <>
      <img src="http://localhost:3500/" alt="user photo" className="author-photo"/>
    </>
  )
}
export default AuthorImage ;



