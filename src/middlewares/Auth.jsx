import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import jwt_decode from "jwt-decode"

const Auth = (props) => {
    const [token, SetToken] = useState(jwt_decode(localStorage.getItem("token")));


    if (!token) {

    } else if (token.profilePerson === props.profile) {
        console.log(token);
        return props.children;
    } else if (token.profilePerson !== props.profile) {
        return <Navigate to="/Unauthorizedwindow" />;
    }
};

export default Auth;
