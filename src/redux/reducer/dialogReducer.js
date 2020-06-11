import {actionTypes} from "../actionTypes";
import ava1 from "../../resources/ava1.jpg";
import ava2 from "../../resources/ava2.jpg";
import ava3 from "../../resources/ava3.jpg";

const initialState = {
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
};

function addMsg(state) {
    return {
        ...state,
        messages: [...state.messages, {
            id: 5,
            text: state.changeableMsgTxt
        }],
        changeableMsgTxt: ''
    };
}

function updateNewMsgTxt(state, newTxt) {
    return {
        ...state,
        changeableMsgTxt: newTxt
    };
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MSG:
            return addMsg(state);
        case actionTypes.UPDATE_NEW_MSG_TXT:
            return updateNewMsgTxt(state, action.newText);
    }
    return state;
};

export default dialogReducer;