import { ADMIN_RECEIVE_PHONES_LIST, ADMIN_CLEAR_PHONES_LIST, ADMIN_INCREMENT_PHONES_LIST,
     ADMIN_CHANGE_PHONES_LIST, ADMIN_RECEIVE_USERS_LIST, ADMIN_CLEAR_USERS_LIST } from "../actions/index";

const initialState = {
    phonesList: {
        items: [],
        page: {
            items: 8,
            current: 1,
            total: 1,
        },
        total: 0
    },
    usersList: null,
    ordersList: null,
}

const adminReducer = function(state = initialState, action){
    switch(action.type){ 
        case ADMIN_RECEIVE_PHONES_LIST:
        console.log(action, "Admin action");
            let newPage = {...state.phonesList.page, total: action.payload.totalPages, current: 1};
            let newPhonesList = {...state.phonesList,  items : action.payload.items, total: action.payload.totalItems, page: newPage};
            return {...state, phonesList: newPhonesList };
        case ADMIN_INCREMENT_PHONES_LIST:
            let newItems = state.phonesList.items.concat(action.payload.items);
            newPhonesList = {...state.phonesList,  items : newItems};
            return {...state, phonesList: newPhonesList };
        case ADMIN_CHANGE_PHONES_LIST:
            newPage = {...state.phonesList.page, current: action.payload.page};
            newPhonesList = {...state.phonesList, page: newPage};
            return {...state, phonesList: newPhonesList };
        case ADMIN_CLEAR_PHONES_LIST:
            return {...state, phonesList: initialState.phonesList };
        case ADMIN_RECEIVE_USERS_LIST:
            return {...state, usersList: action.payload.items };
        case ADMIN_CLEAR_USERS_LIST:
            return {...state, usersList: initialState.usersList};
        default:
            return state;
    }
}

export default adminReducer;