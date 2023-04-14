import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { state } = useContext(AuthContext);
  let flag = 0;

  if (state.isAuth === false && state.isAdmin === true) {
    flag = 1;
  } else {
    flag = 0;
  }

  if (flag === 0) {
    if (!state.isAuth) {
      return <Navigate to="/login" />
    }
  } else {
    if (!state.isAdmin) {
      return <Navigate to="/login" />
    }
  }


  return children;
};

export default PrivateRoute;