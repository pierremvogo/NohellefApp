import {call, put, takeLatest,takeLeading} from 'redux-saga/effects'
import {types} from '../reducer/types';
import authService from './auth.services';
/**
 * @description user sign In
 */
function*  loginUser ({action}) {
    try{
        
    }
    catch(error) {
        
    }
}

/**
 * @description user sign Up
 */

function* createUsers ({payload}) {
    try{
        
    }
    catch(error){
        
    }
}

/**
 * @description user log out
 */

function* logoutUser () {
    try{
        
    }
    catch(error){
        
    }
}

export default function* AuthSaga () {
    yield takeLatest(types.LOGIN_SUCCESS, loginUser);
    yield takeLatest(types.REGISTER_SUCCESS, createUsers);
    yield takeLeading(types.LOG_OUT, logoutUser);
}