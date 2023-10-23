import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../../api/AuthContext';


const IsAuthorized = ({children}) => {
    const { user } = useAuth();
    const location = useLocation();
    if(user.role ===!"admin"){
        return <Navigate to="/home" state={{ from: location }} replace />;
    }
    return children;
};

export default IsAuthorized;



