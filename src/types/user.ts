export interface User {
    id:number ;
    username:string; 
    picturePath:string ;
    firstName?:string ;
    lastName?:string;
    birthday?:Date;
};
 
export interface relation {
    userId: number ;
    createdAt:Date;
    updatedAt:Date;
    state:string; 
};