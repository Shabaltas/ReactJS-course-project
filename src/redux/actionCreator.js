import {actionTypes} from "./actionTypes";

const actionCreator = {
    onAddMsg: () => ({ type: actionTypes.ADD_MSG }),
    onAddPost: () => ({type: actionTypes.ADD_POST}),
    onChangePostInput: (newText) => ({
            type: actionTypes.UPDATE_NEW_POST_TXT,
            newText
        }),
    onChangeMsgInput: (newText) => ({
            type: actionTypes.UPDATE_NEW_MSG_TXT,
            newText
        }),
    onFollow: (userId) => ({
        type: actionTypes.FOLLOW,
        userId
    }),
    onUnfollow: (userId) => ({
        type: actionTypes.UNFOLLOW,
        userId
    }),
    onSetUsers: (users, totalCount, currentPage) => ({
        type: actionTypes.SET_USERS,
        users,
        totalCount,
        currentPage
    }),
    onToggleIsFetching: (isFetching) => ({
        type: actionTypes.TOGGLE_IS_FETCHING,
        isFetching
    }),
    onSetProfile: (profile) => ({
        type: actionTypes.SET_PROFILE,
        profile
    })
};

export default actionCreator;
