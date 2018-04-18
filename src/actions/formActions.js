import { RECEIVE_FORM_DATA } from "./index";
import Api from "../utils/Api";

export function receiveFormData(items){
   return {
       type: RECEIVE_FORM_DATA,
       payload: { items }
   }
}

export function fetchFormData(){
   return (dispatch, getState) => {
       return Api.getFormData().then(response => dispatch(receiveFormData(response)));
   };
}
