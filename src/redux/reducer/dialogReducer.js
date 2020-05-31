import {actionTypes} from "../actionTypes";

function addMsg(state) {
    state.messages.push({
        id: 5,
        text: state.changeableMsgTxt
    });
    state.changeableMsgTxt = '';
}

const dialogReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_MSG:
            addMsg(state);
            break;
        case actionTypes.UPDATE_NEW_MSG_TXT:
            state.changeableMsgTxt = action.newText;
            break;
    }
    return state;
};

export default dialogReducer;