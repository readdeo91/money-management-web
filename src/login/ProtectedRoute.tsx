import {Navigate} from "react-router-dom";

export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

export default function ProtectedRoute({authenticationPath, outlet}: ProtectedRouteProps) {
    if(localStorage.getItem('auth') !== null) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};
