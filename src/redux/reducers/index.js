import { combineReducers } from 'redux';
import AuthReducer from '../../applications/redux/reducer/reducers/auth';
import UserReducer from '../../applications/redux/reducer/reducers/users';

const rootReducer = combineReducers({
	authReducer: AuthReducer,
	userReducer: UserReducer,
});

export default rootReducer;