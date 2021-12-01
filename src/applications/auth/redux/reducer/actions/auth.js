import {
    types
} from '../types';

export const authLoginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
});

export const authRegisterSuccess = (payload) => ({
    type: types.REGISTER_SUCCESS,
    payload
});

export const authRegisterFail = (payload) => ({
    type: types.REGISTER_FAIL,
    payload
});

export const authLoginFail = (payload) => ({
    type: types.LOGIN_FAIL,
    payload
});

export const authLogout = () => ({
    type: types.LOG_OUT,
});
