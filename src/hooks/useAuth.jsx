import { useContext } from "react";
import { AuthContext } from "../provider/AuthProviders";


const useAuth = () => {
    const authUtils = useContext(AuthContext);
    return authUtils
};

export default useAuth;