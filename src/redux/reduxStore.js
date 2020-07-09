import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import navbarReducer from "./reducer/navbarReducer";
import profileReducer from "./reducer/profileReducer";
import dialogReducer from "./reducer/dialogReducer";
import usersReducer from "./reducer/userReducer";
import authReducer from "./reducer/authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import appReducer from "./reducer/appReducer";
let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;
