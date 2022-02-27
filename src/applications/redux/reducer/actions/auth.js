import {
    types
} from '../types';

export const authLogin = (payload) => ({
    type: types.LOGIN_REQUESTED,
    payload,
});

export const authRegister = (payload) => ({
    type: types.REGISTER_REQUESTED,
    payload,
});

export const authLogout = () => ({
    type: types.LOGOUT_REQUESTED,
});


export const authLoginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
});

export const authgetResetTokenSuccess = (payload) => ({
    type: types.TOKEN_SUCCESS,
    payload,
});

export const authgetResetTokenFailed = (message) => ({
    type: types.TOKEN_FAILED,
    message,
});

export const authResetFailed = (message) => ({
    type: types.RESET_FAILED,
    message,
});

export const authResetSuccess = (payload) => ({
    type: types.RESET_SUCCESS,
    payload,
});

export const authLoginFailed = (message) => ({
    type: types.LOGIN_FAILED,
    message,
});

export const authShowMessage = (isShow) => ({
    type: types.SHOW_MESSAGE,
    isShow,
});

export const authSetLoginForm = (formData) => ({
    type: types.SET_LOGIN_FORM,
    formData,
});

export const authSetRegisterForm = (formData) => ({
    type: types.SET_REGISTER_FORM,
    formData,
});

export const authRegisterSuccess = (payload) => ({
    type: types.REGISTER_SUCCESS,
    payload
});

export const authRegisterFailed = (message) => ({
    type: types.REGISTER_FAILED,
    message
});

