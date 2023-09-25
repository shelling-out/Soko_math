export interface Endpoint {
    type:string;
    id:number ;
};

export interface Comment {
    id: number ,
    text: string ,
    createdAt: string ,
    updatedAt: Date ,
    userId: number,
    postId: number,
    User: {
      username: string ,
      picturePath: string | null 
    }
};
export interface Reaction {
    id:number; 
    state: string ;
    createdAt: Date ;
    updatedAt: Date ;
    userId: number ;
    postId : number ;
    User:{
        id:number ; 
        username:string;
        picturePath:string;  
    }
}
export interface Post {
    post : {
        id:number,
        text:string,
        picture:string|null,
        createdAt: Date,
        updatedAt: Date,
        state:string,
        userId:number,
        commentsCount:number,
        likesCount:number,
        dislikesCount:number,
        User:{
            username:string,
            picturePath:string
        },
        Comments: Comment[],
        Reactions: Reaction[]
    }
};
