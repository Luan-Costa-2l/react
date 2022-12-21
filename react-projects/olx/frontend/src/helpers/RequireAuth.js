import { Navigate } from "react-router-dom";
import { isLogged } from "./AuthHandler";

export const RequireAuth = ({ children }) => {
    const login = isLogged();
    return login ? children : <Navigate to='/signin' />;
}