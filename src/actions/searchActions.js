import { UPDATE_SEARCH_STRING, UPDATE_SEARCH_LIST } from "./index";
import Api from "../utils/Api";


export function updateSearchString(searchString) {
	return {
		type: UPDATE_SEARCH_STRING,
		payload: { searchString }
	};
}

export function updateSearchList(items) {
	return {
		type: UPDATE_SEARCH_LIST,
		payload: { items }
	};
}


export function fetchSearchList(searchString){
    return (dispatch, getState) => {		
		dispatch(updateSearchString(searchString));
		return Api.makeSearch(searchString).then(response => { dispatch(updateSearchList(response.items)); });
	};
}