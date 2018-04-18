import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART, RECEIVE_CART } from "./index";
import Api from "../utils/Api";

export function receiveCart(cart){
    return {
        type: RECEIVE_CART,
        payload: { cart }
    }
}

export function addItemToCart(item){
    return {
        type: ADD_ITEM_TO_CART,
        payload: { item }
    }
}

export function removeItemFromCart(item){
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: { item }
    }
}

export function signOut(){
    return {
        type: CLEAR_CART,
    }
}

export function addToCart(item){
    return (dispatch, getState) => {
        Api.addItemToOrder(item).then((response) => {
            dispatch(getOrder());
        })
	};
}

export function removeFromCart(itemId){
    return (dispatch, getState) => {		
        return Api.resetItemFromOrder(itemId)
            .then((response) => {
                dispatch(getOrder());
            })
	};
}

export function closeOrder(){
    return (dispatch, getState) => {		
        return Api.closeOrder(getState().cart.Id)
            .then((response) => {
                dispatch(getOrder());
            })
	};
}

export function getOrder(){
    return (dispatch, getState) => {
        return Api.getOrder(getState().login.user.Id).then((response) => { console.log(response, "getCart"); dispatch(receiveCart(response)) });
    }
}