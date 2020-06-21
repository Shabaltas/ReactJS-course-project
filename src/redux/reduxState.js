import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./reducer/navbarReducer";
import profileReducer from "./reducer/profileReducer";
import dialogReducer from "./reducer/dialogReducer";
import usersReducer from "./reducer/userReducer";
import authReducer from "./reducer/authReducer";
import thunkMiddleWare from 'redux-thunk';
let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
