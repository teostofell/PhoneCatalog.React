import { ADMIN_RECEIVE_PHONES_LIST, ADMIN_CLEAR_PHONES_LIST, ADMIN_INCREMENT_PHONES_LIST,
    ADMIN_RECEIVE_USERS_LIST, ADMIN_CLEAR_USERS_LIST, ADMIN_CHANGE_PHONES_LIST } from "./index";
import Api from "../utils/Api";



export function receivePhonesList(items, totalItems, totalPages){
    return {
        type: ADMIN_RECEIVE_PHONES_LIST,
        payload: { items, totalItems, totalPages }
    }
}

export function incrementPhonesList(items){
    return {
        type: ADMIN_INCREMENT_PHONES_LIST,
        payload: { items }
    }
}

export function clearPhonesList(){
    return {
        type: ADMIN_CLEAR_PHONES_LIST,
    }
}

export function changePage(page){
    return {
        type: ADMIN_CHANGE_PHONES_LIST,
        payload: { page }
    }
}

export function receiveUsersList(items){
    return {
        type: ADMIN_RECEIVE_USERS_LIST,
        payload: { items }
    }
}

export function clearUsersList(){
    return {
        type: ADMIN_CLEAR_USERS_LIST
    }
}



export function fetchPhonesList(){
	return (dispatch, getState) => {
		dispatch(clearPhonesList());
		
        let itemsOnPage = getState().admin.phonesList.page.items;
		let page = getState().admin.phonesList.page.current;
		return Api.getPhones({}, itemsOnPage, page).then(response => {dispatch(receivePhonesList(response.items, response.totalItems, response.totalPages)); });
	};
}

export function fetchMorePhones(){
	return (dispatch, getState) => {				
        let itemsOnPage = getState().phonesList.page.items;
        let totalPages = getState().admin.phonesList.page.total;
        let newPage = getState().admin.phonesList.page.current + 1;

        if(newPage > totalPages){
            return;
        }

        dispatch(changePage(newPage));

		return Api.getPhones({}, itemsOnPage, newPage).then(response => {dispatch(incrementPhonesList(response.items)); });
	};
}

export function fetchUsersList(){
	return (dispatch, getState) => {
		dispatch(clearUsersList());
		
		return Api.getUsers().then(response => {dispatch(receiveUsersList(response)); });
	};
}

