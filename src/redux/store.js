import createSagaMiddleware from 'redux-saga';
import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js'; 
import rootSaga from '../applications/redux/saga/index';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);



export default store;   