import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./reducer/navbarReducer";
import profileReducer from "./reducer/profileReducer";
import dialogReducer from "./reducer/dialogReducer";
import usersReducer from "./reducer/userReducer";
import authReducer from "./reducer/authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleWare from 'redux-thunk';
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
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
