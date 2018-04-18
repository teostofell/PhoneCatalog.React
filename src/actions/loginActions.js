import { TOGGLE_LOGIN_MODAL, SIGN_IN, SIGN_OUT, RECEIVE_AVATAR, RECEIVE_ORDERS } from "./index";
import Api from "../utils/Api";


export function toggleLoginModal() {
    return {
        type: TOGGLE_LOGIN_MODAL,
    }
}

export function signIn(user, token) {
    return {
        type: SIGN_IN,
        payload: { user, token },
    }
}

export function receiveAvatar(avatar) {
    return {
        type: RECEIVE_AVATAR,
        payload: { avatar },
    }
}

export function receiveOrders(orders) {
    return {
        type: RECEIVE_ORDERS,
        payload: { orders },
    }
}

export function signOut() {
    return {
        type: SIGN_OUT,
    }
}

export function changeAvatar(file){
    return (dispatch, getState) => {
        const userId = getState().login.user.Id;
        return Api.uploadAvatar(userId, file).then(response => { dispatch(receiveAvatar(response.data)); });
    };
}

export function fetchOrders(){
    return (dispatch, getState) => {
        const userId = getState().login.user.Id;
        return Api.getUserOrders(userId).then(response => { dispatch(receiveOrders(response.data)); });
    };
}