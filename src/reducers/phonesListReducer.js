import { RECEIVE_PHONES_LIST, CLEAR_PHONES_LIST, RECEIVE_FILTERS_LIST,
     CHECK_FILTER, UNCHECK_FILTER, PHONES_CHANGE_PAGE, RANGE_CHANGED } from "../actions/index";

const initialState = {
    items: null,
    filter: null,
    total: 0,
    page: {
        items: 8,
        current: 1,
        total: 1
    }
}

const phonesListReducer = function(state = initialState, action){
    switch(action.type){
        case RECEIVE_PHONES_LIST:
            let newPage = {...state.page, total: action.payload.totalPages, current: 1};
            return {...state, items : action.payload.items, total: action.payload.totalItems, page: newPage};
        case CLEAR_PHONES_LIST:
            return {...state, items: null};
        case RECEIVE_FILTERS_LIST:
            if(state.filter !== null)
                return state;
            return {...state, filter: action.payload.items};
        case PHONES_CHANGE_PAGE:
            newPage = {...state.page, current: action.payload.number};
            return {...state, page: newPage};
        case CHECK_FILTER:
            let {group, name} = action.payload;
            let newFilter = {...state.filter };
            newFilter[group] = {...state.filter[group]};
            newFilter[group][name] = true;
            return {...state, filter: newFilter};
        case UNCHECK_FILTER:
            group = action.payload.group, name = action.payload.name;
            newFilter = {...state.filter };
            newFilter[group] = {...state.filter[group]};
            newFilter[group][name] = false;
            return {...state, filter: newFilter};
        case RANGE_CHANGED:        
            console.log(action, "Our action");
            let { field, value } = action.payload;
            group = action.payload.group;
            newFilter = {...state.filter};
            newFilter[group][field] = value;
            return {...state, filter: newFilter};
        default:
            return state;
    }
}

export default phonesListReducer