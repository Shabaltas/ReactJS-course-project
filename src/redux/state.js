import ava1 from "../resources/ava1.jpg";
import ava2 from "../resources/ava2.jpg";
import ava3 from "../resources/ava3.jpg";

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
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    addPost() {
        this._state.profilePage.posts.push({
            id: 5,
            msg: this._state.profilePage.changeablePostMsg,
            likes: 0
        });
        this._state.profilePage.changeablePostMsg = '';
        this._subscriber(this);
    },
    addMessage(msg) {
        this._state.dialogsPage.messages.push({
            id: 5,
            text: msg
        });
        this._subscriber(this);
    },

    changePostMsg(text) {
        this._state.profilePage.changeablePostMsg = text;
        debugger;
        this._subscriber(this);
    }
};
export default store;
