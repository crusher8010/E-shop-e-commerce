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