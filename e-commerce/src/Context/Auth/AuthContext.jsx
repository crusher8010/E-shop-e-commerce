import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const AuthContext = createContext();

const initstate = {
  isLoading: false,
  isAuth: false,
  token: "",
  isError: false,
  isAdmin: false,
}

const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initstate);


  return (
    <AuthContext.Provider value={{state,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;