import createSagaMiddleware from 'redux-saga';
import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from '../applications/auth/redux/reducer/reducers/auth';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;  