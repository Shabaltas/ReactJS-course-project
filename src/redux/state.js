import ava1 from "../resources/ava1.jpg";
import ava2 from "../resources/ava2.jpg";
import ava3 from "../resources/ava3.jpg";
import dialogReducer from "./reducer/dialogReducer";
import profileReducer from "./reducer/profileReducer";
import navbarReducer from "./reducer/navbarReducer";

let store = {
    _subscriber() {
        console.log("no subscriber");
    },
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Artyom", photo: ava1},
                {id: 2, name: "Nastya", photo: ava2},
                {id: 3, name: "Igor", photo: ava3}
            ],
            messages: [
                {id: 1, text: "Hi!"},
                {id: 2, text: "Bye."}
            ],
            changeableMsgTxt: ''
        },
        profilePage: {
            posts: [
                {id: 1, msg: "How r u all", likes: 12},
                {id: 2, msg: "LOL", likes: 0},
                {id: 3, msg: "dead", likes: 2},
                {id: 4, msg: "...", likes: 1}
            ],
            changeablePostMsg: ''
        },
        navbar: {
            friends: [
                {id: 1, name: "Artyom", photo: ava1},
                {id: 2, name: "Nastya", photo: ava2},
                {id: 3, name: "Igor", photo: ava3}
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._subscriber(this);
    },
};
export default store;
