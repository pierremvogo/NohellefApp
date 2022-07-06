import {types} from '../types';

const INITIAL_STATE = {};

const MessageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SET_MESSAGE:
            return {
                message: action.payload.message
            };
        case types.CLEAR_MESSAGE:
            return{
                message: ""
            };
        default:
            return state;
    }
}
export default MessageReducer;