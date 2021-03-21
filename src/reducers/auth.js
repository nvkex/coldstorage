import {
    LOGIN_ADMIN,
    LOGIN_USER,
    LOGOUT_ADMIN,
    LOGOUT_USER,
    SAVE_DATA,
    CLEAR_DATA
} from "../constants/ActionTypes";

// API Requests reducer
export default function authReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: { ...action.payload }
            }
        case LOGOUT_USER:
            return {
                ...state,
                userInfo: null
            }
        case LOGIN_ADMIN:
            return {
                ...state,
                adminInfo: { ...action.payload }
            }
        case LOGOUT_ADMIN:
            return {
                ...state,
                adminInfo: null
            }
        case SAVE_DATA:
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
            return {...state};
        case CLEAR_DATA:
            localStorage.removeItem('userInfo')
            return {...state};
        default:
            return state;
    }
}
