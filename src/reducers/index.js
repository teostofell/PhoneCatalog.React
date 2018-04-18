import { combineReducers } from "redux";
import phonesListReducer from "./phonesListReducer";
import loginReducer from "./logInReducer";
import searchReducer from "./searchReducer";
import cartReducer from "./cartReducer";
import phoneDetailReducer from "./phoneDetailReducer";
import adminReducer from "./adminReducer";
import formDataReducer from "./formDataReducer";
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers(
	{
		phonesList : phonesListReducer,
		login: loginReducer,
		search: searchReducer,
		form: formReducer,
		cart: cartReducer,
		admin: adminReducer,
		formData: formDataReducer,
		phone: phoneDetailReducer
	}
);

export default rootReducer;