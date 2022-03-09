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
                                changePayload: null,
                                changesForm: null,
                                resetPayload: null,
                                adminPayload: null,
                                isShowMessage: false,
                                confirmEmail: null,
                                updatePayload: null,
                                tutorCreateMessage: null,
                                isRegister: false,
                                loginsForm: null,
                                registersForm: null,
                                user:user
                            }:
                            {
                                isLoggedIn: false,
                                loading: false,
                                isRestricted: false,
                                changePayload: null,
                                changesForm: null,
                                error: null,
                                loginsForm: null,
                                tutorCreateMessage: null,
                                registersForm: null,
                                confirmEmail: null,
                                isRegister: false,
                                resetToken: null,
                                updatePayload: null,
                                resetPayload: null,
                                adminPayload: null,
                                isShowMessage: false,
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
                isRegister: true,
                isShowMessage: false,
                user: action.payload
            };
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                isRegister: false,
                isShowMessage: true,
                tutorCreateMessage: null,
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
                isShowMessage: false,
                user: action.payload
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                isShowMessage: true,
                error: action.message,
            };
        case types.RESET_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                error: null,
                isShowMessage: false,
                resetPayload: action.payload

            };
        case types.RESET_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                isRestricted: false,
                loading: false,
                error: action.message,
                isShowMessage: true,
                resetPayload: null,
                
            };
        case types.TOKEN_FAILED:
            return {
                ...state,
                error: action.message,
                isShowMessage: false,
                tokenPayload: null,
            };
        case types.CODE_ADMIN_SUCCESS:
            return {
                ...state,
                error: null,
                adminPayload: action.payload,
            };
        case types.CODE_ADMIN_FAILED:
            return {
                ...state,
                error: action.message,
                adminPayload: null,
            };

        case types.CONFIRM_EMAIL_SUCCESS:
            return {
                ...state,
                error: null,
                confirmEmail: action.payload,
            };
        case types.CONFIRM_EMAIL_FAILED:
            return {
                ...state,
                error: action.message,
                confirmEmail: null
            };
        case types.TOKEN_SUCCESS:
            return {
                ...state,
                error: null,
                isShowMessage: true,
                tokenPayload: action.payload,
            };
        case types.SHOW_MESSAGE:
            return {
                ...state,
                isShowMessage: action.isShow,
            };
        case types.SET_LOGIN_FORM:
            return {
                ...state,
                loginsForm: action.formData,
            };
        case types.SET_REGISTER_FORM:
            return {
                ...state,
                registersForm: action.formData,
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
        case types.CHANGE_SUCCESS:
            return {
                ...state,
                error: null,
                changePayload: action.payload,
                                
            };
        case types.CHANGE_FAILED:
            return {
                ...state,
                error: action.message,
                changePayload: null,
            };
        case types.SET_CHANGE_FORM:
            return {
                ...state,
                changesForm: action.formData,
            };
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                updatePayload: action.payload,
                error: null,
            };
        case types.UPDATE_FAILED:
            return {
                ...state,
                updatePayload: null,
                error: action.message,
            };
        case types.SHARE_USER:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case types.CREATE_TUTOR_SUCCESS:
            return {
                ...state,
                tutorCreateMessage: action.message,
                error: null,
            };
        default:
            return state;
    }
}
export default AuthReducer;