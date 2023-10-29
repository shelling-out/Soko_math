export interface ErrorMessage  {
    msg: string ;
    errors:{
        groupName?: string[] ,
        groupDescription?: string[],
        id?: number ,
        
    }
}