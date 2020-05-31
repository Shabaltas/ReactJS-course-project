import {combineReducers, createStore} from "redux";
import navbarReducer from "./reducer/navbarReducer";
import profileReducer from "./reducer/profileReducer";
import dialogReducer from "./reducer/dialogReducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navbar: navbarReducer
});
let store = createStore(reducers);

export default store;