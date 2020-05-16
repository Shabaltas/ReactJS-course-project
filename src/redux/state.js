import ava1 from "../resources/ava1.jpg";
import ava2 from "../resources/ava2.jpg";
import ava3 from "../resources/ava3.jpg";
import {actionTypes} from "./actionTypes";

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
            ]
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
    _addPost() {
        this._state.profilePage.posts.push({
            id: 5,
            msg: this._state.profilePage.changeablePostMsg,
            likes: 0
        });
        this._state.profilePage.changeablePostMsg = '';
        this._subscriber(this);
    },
    _addMessage(msg) {
        this._state.dialogsPage.messages.push({
            id: 5,
            text: msg
        });
        this._subscriber(this);
    },

    _changePostText(text) {
        this._state.profilePage.changeablePostMsg = text;
        debugger;
        this._subscriber(this);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case actionTypes.ADD_MSG:
                this._addMessage(action.newMsg);
                break;
            case actionTypes.ADD_POST:
                this._addPost();
                break;
            case actionTypes.UPDATE_NEW_POST_TXT:
                this._changePostText(action.newText);
                break;
        }
    },
};
export default store;
