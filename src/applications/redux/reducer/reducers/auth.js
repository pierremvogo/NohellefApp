import {
        types
    } from '../types';

const user  = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = user ?
                            {
                                isLoggedIn: true,
                                loading: false,
                                isRestricted: true,
                                error: null,
                                resetToken: null,
                                resetPayload: null,
                                user:user
                            }:
                            {
                                isLoggedIn: false,
                                loading: false,
                                isRestricted: false,
                                error: null,
                                resetToken: null,
                                resetPayload: null,
                                user: null
                            };



const AuthReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case types.REGISTER_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case types.LOGIN_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                loading: false, 
                error: null, 
                user: action.payload
            };
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                error: action.message
            }
        case types.LOGIN_SUCCESS:
            console.log('LOGIN DISPATCH');
            console.log(action.payload);
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                isRestricted: true,
                error: null,
                user: action.payload
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                error: action.message,
                user: null
            };
        case types.RESET_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                error: null,
                resetPayload: action.payload

            };
        case types.RESET_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                error: action.message,
                resetPayload: null,
                
            };
        case types.TOKEN_FAILED:
            return {
                ...state,
                error: action.message,
                resetToken: null,
            };
        case types.TOKEN_SUCCESS:
            return {
                ...state,
                error: null,
                resetToken: action.payload,
            };
        case types.LOGOUT_REQUESTED:
            return {
                ...state,
                isLoggedIn: false,
                loading: true,
                error: null,
                isRestricted: false,
                user: null
            };
        default:
            return state;
    }
}
export default AuthReducer;