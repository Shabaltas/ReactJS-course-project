import ava1 from "../resources/ava1.jpg";
import ava2 from "../resources/ava2.jpg";
import ava3 from "../resources/ava3.jpg";
import {renderApp} from "../render";

let state = {
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
};

export const addPost = (postMsg) => {
    state.profilePage.posts.push({
        id: 5,
        msg: postMsg,
        likes: 0
    });
    state.profilePage.changeablePostMsg = '';
    renderApp(state);
};

export const addMessage = (msg) => {
    state.dialogsPage.messages.push({
        id: 5,
        text: msg
    });
    renderApp(state);
};

export const changePostMsg = (text) => {
    state.profilePage.changeablePostMsg = text;
    renderApp(state);
};

export default state;
