import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loding) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signUp" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
