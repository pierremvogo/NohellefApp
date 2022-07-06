import {call, put, takeEvery, takeLatest,takeLeading} from 'redux-saga/effects';
import UserService from "../users.services";
import {
        types
    } from '../../reducer/types';

function getApi(){
	return UserService.getApi()
		.then(response => response.json())
	    	.catch((error)=> {throw error})
}

function* fetchUsers(action) {
	try{
		const users = yield call(getApi);
		console.log("users API GET...");
		console.log(action);
		console.log(users);
		yield put({
    type: types.GET_USERS_SUCCESS,
    users: users,
});
	}catch(e){
		yield put({
    type: types.GET_USERS_FAILED,
    message: e.message,
});
	}
}

function* userSaga () {
	yield takeEvery(types.GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;

