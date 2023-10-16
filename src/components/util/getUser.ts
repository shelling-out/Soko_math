import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/userSlice";
export const getUser = () => {
    return useSelector(selectUser) ;
};