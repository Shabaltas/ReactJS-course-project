import {actionTypes} from "./actionTypes";

const actionCreator = {
    createAddMsgAction: () => ({ type: actionTypes.ADD_MSG }),
    createAddPostAction: () => ({type: actionTypes.ADD_POST}),
    createUpdateNewPostTextAction: (newText) => ({
            type: actionTypes.UPDATE_NEW_POST_TXT,
            newText
        }),
    createUpdateNewMsgTextAction: (newText) => ({
            type: actionTypes.UPDATE_NEW_MSG_TXT,
            newText
        }),
    createFollowAction: (userId) => ({
        type: actionTypes.FOLLOW,
        userId
    }),
    createUnfollowAction: (userId) => ({
        type: actionTypes.UNFOLLOW,
        userId
    }),
    createSetUsersAction: (users, totalCount, currentPage) => ({
        type: actionTypes.SET_USERS,
        users,
        totalCount,
        currentPage
    }),
};

export default actionCreator;
