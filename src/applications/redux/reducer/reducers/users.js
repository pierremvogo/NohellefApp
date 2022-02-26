import {
    types
} from '../types';

const initialState = {
    user: null,
    loading: true,
    error: null,
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_USERS_REQUESTED:
            return{
                ...state,
                loading: true,
            };
        case types.GET_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload.data,
            };
        case types.GET_USERS_FAILED:
        console.log("error message--------------------------------->>>>++<>>>>>");
        console.log(action.message);
            return{
                ...state,
                loading: false,
                error: action.message,
            };

        default:
            return state;
    }
}

export default UserReducer;