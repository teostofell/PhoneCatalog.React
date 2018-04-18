import { TOGGLE_LOGIN_MODAL, SIGN_IN, SIGN_OUT, RECEIVE_AVATAR, RECEIVE_ORDERS } from "../actions/index";


const initialState = {
    isModalOpen: false,
    isLogged: false,
    token: "",
    user: {},
    orders: null,
}

const loginReducer = function(state = initialState, action){
    switch(action.type){
        case TOGGLE_LOGIN_MODAL:
            return {...state, isModalOpen: !state.isModalOpen};
        case SIGN_IN:
            return {...state, isLogged: true, token: action.payload.token, user: action.payload.user };
        case SIGN_OUT:
            return initialState;
        case RECEIVE_AVATAR:
            let newUser = {...state.user, Avatar: action.payload.avatar};
            return {...state, user: newUser};
        case RECEIVE_ORDERS:
            return {...state, orders: action.payload.orders }
        default:
            return state;
    }
}

export default loginReducer;