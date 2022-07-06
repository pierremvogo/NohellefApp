import {call, put, takeEvery, takeLatest,takeLeading} from 'redux-saga/effects';
import AuthService from "../auth.services";

import {
        types
    } from '../../reducer/types';


function registerUser(payload){
	return AuthService.registerUser(payload)
		.then(response => response.json())
	    .catch((error)=> {throw error})
}

function loginUser(payload){
	return UserService.loginUser(payload)
		.then(response => response.json())
	    .catch((error)=> {throw error})
}

function*  loginUser (payload) {
    try{
        const login = yield call(loginUser);
        console.log("Login success saga");
        console.log(login);
        yield put({type: types.LOGIN_SUCCESS, payload: users});
    catch(error) {
        yield put({type: types.LOGIN_FAILED, payload: e.message,});
    }
}
}


function* createUsers (payload) {
    try{
        const register = yield call(registerUser);
        console.log("register success saga");
        console.log(register);
        yield put({ type: types.REGISTER_SUCCESS, payload: register});
    }
    catch(error){
        yield put({ type: types.REGISTER_FAILED, payload: error.message});
}
}


function* logoutUser () {
    try{
        yield put({ type: types.LOGOUT_SUCCESS, payload: register});
    }
    catch(error){
        yield put({ type: types.LOGOUT_FAILED, payload: register});
    }
}

export default function* authSaga () {
    yield takeLatest(types.LOGIN_REQUESTED, loginUser);
    yield takeLatest(types.REGISTER_REQUESTED, createUsers);
    yield takeLeading(types.LOGOUT_REQUESTED, logoutUser);
}

export default authSaga;

