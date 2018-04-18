import { RECEIVE_PHONE_DETAIL } from "../actions/index";

const initialState = {
    details: null,
}

const phoneDetailReducer = function(state = initialState, action){
    switch(action.type){
        case RECEIVE_PHONE_DETAIL:
            return {...state, details: action.payload.values };
        default: 
            return state;
    }
}

export default phoneDetailReducer;