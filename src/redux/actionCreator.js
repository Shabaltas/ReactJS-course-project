import {actionTypes} from "./actionTypes";

const actionCreator = {
    createAddMsgAction(msg) {
        return {
            type: actionTypes.ADD_MSG,
            newMsg: msg
        }
    },
    createAddPostAction() {
        return {
            type: actionTypes.ADD_POST
        }
    },
    createUpdateNewPostTextAction(text) {
        return {
            type: actionTypes.UPDATE_NEW_POST_TXT,
            newText: text
        }
    },
};

export default actionCreator;