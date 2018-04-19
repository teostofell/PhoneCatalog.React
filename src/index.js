import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const initialState = {};

if (localStorage["teostofell::token"] && (Date.now() - localStorage["teostofell::timestamp"]) < 43200) {
	initialState.login = {
		isLogged: true,
		token: localStorage["teostofell::token"],
		user: JSON.parse(localStorage["teostofell::user"]),
	}
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunkMiddleware)));

window.onbeforeunload = () => {
	const { login } = store.getState();

	localStorage.setItem("teostofell::token", login.token);
	localStorage.setItem("teostofell::user", JSON.stringify(login.user));
};

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById("root"));

registerServiceWorker();
