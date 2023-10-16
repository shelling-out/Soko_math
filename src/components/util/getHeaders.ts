import { getUser } from "./getUser"
export const getHeaders = ()=>{
    let user = getUser() ;
    let headers  = {
        authorization: user.token 
    };
    return headers ;
}