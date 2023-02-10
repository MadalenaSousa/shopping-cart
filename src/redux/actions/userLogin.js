import { USER_LOGIN } from "../actionTypes";

export const userLogin = (userData) => {
    return {
        type: USER_LOGIN,
        payload: userData
    }
}