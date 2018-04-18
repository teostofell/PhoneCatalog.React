import { RECEIVE_PHONE_DETAIL } from "./index";
import Api from "../utils/Api";

export function receivePhoneDetail(values) {
    return {
        type: RECEIVE_PHONE_DETAIL,
        payload: { values }
    }
}


export function fetchPhoneDetails(item) {
    return (dispatch, getState) => {
        return Api.getDetails(item).then(response => {dispatch(receivePhoneDetail(response.details)); });
    };
}

