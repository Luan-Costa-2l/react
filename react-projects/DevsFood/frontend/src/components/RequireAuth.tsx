import { useAppSelector } from "../redux/hooks/useAppSelector";
import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
    const token = useAppSelector(state => state.user.token);

    if (!token || token == '') {
        return <Navigate to="/login" />;
    }
    
    return children;
}