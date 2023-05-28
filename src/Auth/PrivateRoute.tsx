import React from "react";
import { Route, RouteProps} from "react-router-dom";

const PrivateRoute = (props: JSX.IntrinsicAttributes & RouteProps) => {
    const token = localStorage.getItem("auth");
    return <>{token ? <Route {...props} /> : <Route path="/login" />}</>;
};

export default PrivateRoute;