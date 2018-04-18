import { RECEIVE_FORM_DATA } from "../actions/index";


const initialState = {
    brand: [],
    os: [],
    screenResolution: [],
    city: [],
    role: [],
}

const formDataReducer = function(state = initialState, action){
    switch(action.type){
        case RECEIVE_FORM_DATA:
            return action.payload.items;
        default:
            return state;
    }
}

export default formDataReducer;