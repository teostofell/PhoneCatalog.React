import { RECEIVE_PHONES_LIST, CLEAR_PHONES_LIST, RECEIVE_FILTERS_LIST,
	 CHECK_FILTER, UNCHECK_FILTER, CLEAR_FILTER, PHONES_CHANGE_PAGE, RANGE_CHANGED } from "./index";
import Api from "../utils/Api";

export function receivePhonesList(items, totalItems, totalPages){
    return {
        type: RECEIVE_PHONES_LIST,
        payload: { items, totalItems, totalPages }
    }
}

export function receiveFiltersList(items){
    return {
        type: RECEIVE_FILTERS_LIST,
        payload: { items }
    }
}

export function clearPhonesList(){
    return {
        type: CLEAR_PHONES_LIST,
    }
}

export function checkFilter(group, name) {
	return {
		type: CHECK_FILTER,
		payload: { group, name }
	};
}

export function uncheckFilter(group, name) {
	return {
		type: UNCHECK_FILTER,
		payload: { group, name },
	};
}

export function rangeChanged(group, field, value) {
	return {
		type: RANGE_CHANGED,
		payload: { group, field, value },
	};
}

export function clearFilter() {
	return {
		type: CLEAR_FILTER,
	};
}

export function changePhonesPage(number) {
	return {
		type: PHONES_CHANGE_PAGE,
		payload: { number }
	};
}


export function fetchPhonesList(){
	return (dispatch, getState) => {
		dispatch(clearPhonesList());
		
        let filter = getState().phonesList.filter;
        let itemsOnPage = getState().phonesList.page.items;
		let page = getState().phonesList.page.current;
		return Api.getPhones(filter, itemsOnPage, page).then(response => {dispatch(receivePhonesList(response.items, response.totalItems, response.totalPages)); });
	};
}

export function fetchFiltersList(){
    return (dispatch, getState) => {		
		return Api.getFilters().then(response => { dispatch(receiveFiltersList(response.items)); });
	};
}
