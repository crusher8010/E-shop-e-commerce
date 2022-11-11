const reducer = (state, action) => {
    switch (action.type) {
        case "Login_Loading": {
            return {
                isLoading: true,
                isAuth: false,
                token: "",
                isError: false,
                isAdmin: false,
            }
        }

        case "Login_Success": {
            return {
                isLoading: false,
                isAuth: true,
                token: action.payload,
                isError: false,
                isAdmin: false,
            }
        }

        case "Login_Failure": {
            return {
                isLoading: false,
                isAuth: false,
                token: "",
                isError: true,
                isAdmin: false,
            }
        }

        case "Admin_Success": {
            return {
                isLoading: false,
                isAuth: false,
                token: "",
                isError: false,
                isAdmin: true,
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;