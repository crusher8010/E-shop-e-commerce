import React,{useContext} from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  let {state} = useContext(AuthContext);
  
  if(!state.isAuth){
    return <Navigate to="/login" />
  }

  return children;
};

export default PrivateRoute;