import {combineReducers, createStore} from "redux";
import navbarReducer from "./reducer/navbarReducer";
import profileReducer from "./reducer/profileReducer";
import dialogReducer from "./reducer/dialogReducer";
import usersReducer from "./reducer/userReducer";
import headerReducer from "./reducer/headerReducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    header: headerReducer
});
let store = createStore(reducers);

export default store;
