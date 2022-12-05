export const loginLoadingAction = () => {
    return {
        type: "Login_Loading",
    }
}

export const loginSuccessAction = (token) => {
    return {
        type: "Login_Success",
        payload: token
    }
}

export const loginFailureAction = () => {
   return {
        type: "Login_Failure"
    }
} 

export const adminLogin = () => {
    return {
        type: "Admin_Success"
    }
}

export const logoutAction = () => {
    return {
        type: "LogOut"
    }
}