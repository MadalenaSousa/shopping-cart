import { USER_LOGIN } from "../actionTypes";;

const initialState = {
    isLogged: false,
    userCredentials: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const newUserCredentials = {
                email: action.payload.userEmail,
                password: action.payload.userPassword //this should have some for of encrytancy here
            }

            const newState = {
                isLogged: true,
                userCredentials: newUserCredentials
            }
            return newState;
        default: return state
    }
}

export default userReducer