import {
        types
    } from '../types';

const user  = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = user ?
                            {
                                isLoggedIn: true, 
                                isRestricted: true,
                                error: null,
                                user:user
                            }:
                            {
                                isLoggedIn: false,
                                isRestricted: false,
                                error: null,
                                user: null
                            };



const AuthReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false, 
                error: null, 
                user: action.payload
            };
        case types.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload
            }
        case types.LOGIN_SUCCESS:
            console.log('LOGIN DISPATCH');
            console.log(action.payload);
            return {
                ...state,
                isLoggedIn: true,
                isRestricted: true,
                error: null,
                user: action.payload
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                error: action.payload,
                user: null
            };
        case types.LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                error: null,
                isRestricted: false,
                user: null
            };
        default:
            return state;
    }
}
export default AuthReducer;