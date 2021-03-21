import {
    LOGIN_USER,
    LOGOUT_USER,
    SAVE_DATA,
    CLEAR_DATA,
    LOGIN_ADMIN,
    LOGOUT_ADMIN
} from '../constants/ActionTypes';

import Fetch from '../utils/Fetch'

/**
 * Logs in a user, storing their information and JWT token in redux store
 * @param {Number} status - status of the login API request
 * @param {Object} data - All information about the user trying to login
 * @param {String} token - JWT token sent by the API
 */
const loginUser = (input) => async (dispatch) => {
    Fetch.post('auth/login', {username: input.username, password: input.password})
    .then(res => {
        if (res.status === 202){
            dispatch({ type: LOGIN_USER, payload: {data: res.data.user, token: res.data.token} })
            dispatch({ type: SAVE_DATA, payload: {data: res.data.user, token: res.data.token} })
        }
    }).catch(err=> {
        console.log(err)
    })
    
}
/**
 * Logs out the user
 */
const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    dispatch({ type: CLEAR_DATA })
}

export { loginUser, logoutUser };