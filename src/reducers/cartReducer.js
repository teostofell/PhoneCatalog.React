import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART, RECEIVE_CART } from "../actions/index";


const initialState = {
    cartId: 0,
    total: 0,
    items: []
}

const cartReducer = function(state = initialState, action){
    switch(action.type){
        case RECEIVE_CART:
            return action.payload.cart;
        case ADD_ITEM_TO_CART:
            return {...state, items: [...state.items, action.payload.item]};
        case REMOVE_ITEM_FROM_CART:
            let index = state.items.indexOf(action.payload.item);
            let removed = state.items.splice(index, 1);
            let newItems = [...state.items];
            return {...state, items: newItems};
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
}

export default cartReducer;