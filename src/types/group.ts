export interface Group {
    id: number ;
    groupName: string ;
    groupDescription: string ;
    groupPicture : string | null ;
    createdAt?: Date ;
    updatedAt?: Date ;
    GroupUser?: {
        id: number ,
        groupId: number ,
        userId : number,
        state: string ,
        createdAt: Date ,
        updatedAt: Date 
    }
};
