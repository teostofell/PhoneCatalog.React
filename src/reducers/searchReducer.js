import { UPDATE_SEARCH_STRING, UPDATE_SEARCH_LIST } from "../actions/index";

const initialState = {
    searchString: "",
    searchItems: []
}

const searchReducer = function(state = initialState, action){
    switch(action.type){
        case UPDATE_SEARCH_STRING:
            return {...state, searchString: action.payload.searchString};
        case UPDATE_SEARCH_LIST:
            return {...state, searchItems: action.payload.items};
        default: 
            return state;
    }
}

export default searchReducer;