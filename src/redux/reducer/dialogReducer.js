import actionTypes from "../actionTypes";
import ava1 from "../../resources/ava1.png";
import ava2 from "../../resources/ava2.png";
import ava3 from "../../resources/ava3.png";

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

function addMsg(state, newMsg) {
    return {
        ...state,
        messages: [...state.messages, {
            id: 5,
            text: newMsg
        }]
    };
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MSG:
            return addMsg(state, action.newMsg);
        default:
            return state;
    }
};

export default dialogReducer;
