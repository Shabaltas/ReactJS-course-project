import {actionTypes} from "./actionTypes";

const actionCreator = {
    createAddMsgAction: () => ({ type: actionTypes.ADD_MSG }),
    createAddPostAction: () => ({type: actionTypes.ADD_POST}),
    createUpdateNewPostTextAction: (text) => ({
            type: actionTypes.UPDATE_NEW_POST_TXT,
            newText: text
        }),
    createUpdateNewMsgTextAction: (text) => ({
            type: actionTypes.UPDATE_NEW_MSG_TXT,
            newText: text
        })
};

export default actionCreator;
