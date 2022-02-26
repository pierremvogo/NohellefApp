import {
    types
} from '../types';

export const getUsers = (payload) => ({
    type: types.GET_USERS_REQUESTED,
    payload,
});

export const getUserSuccess = (payload) => ({
    type: types.GET_USERS_SUCCESS,
    payload,
});

export const getUserFailed = (message) => ({
    type: types.GET_USERS_FAILED,
    message,
});