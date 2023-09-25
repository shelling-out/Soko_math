export interface User {
    id:number ;
    username:string; 
    picturePath:string ;
    firstName?:string ;
    lastName?:string;
    birthday?:Date;
};
export interface UsersListProps {
    status:string ;
    type:string ;
    page:string ;
};