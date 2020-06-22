import actionTypes from "./actionTypes";
import api from "../api/api";

const actionCreator = {
    onAddMsg: () => ({type: actionTypes.ADD_MSG}),
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
    }),
    onSetAuthUser: (id, email, login) => ({
        type: actionTypes.SET_AUTH_USER,
        id, email, login
    }),
    onUpdateStatus: (newStatus) => ({
        type: actionTypes.UPDATE_PROFILE_STATUS,
        status: newStatus
    }),
    onToggleFollowing: (isFetching, userId) => ({
        type: actionTypes.TOGGLE_FOLLOWING,
        isFetching,
        userId
    }),
    thunkCreator: {
        getUsers: (page, pageSize) => (dispatch) => {
            dispatch(actionCreator.onToggleIsFetching(true));
            api.getUsers(page, pageSize).then(users => {
                dispatch(actionCreator.onToggleIsFetching(false));
                dispatch(actionCreator.onSetUsers(users.items, users.totalCount, page));
            });
        },
        followUser: (userId) => (dispatch) => {
            dispatch(actionCreator.onToggleFollowing(true, userId));
            api.followUser(userId)
                .then(data => {
                    dispatch(actionCreator.onToggleFollowing(false, userId));
                    if (!data.resultCode)
                        dispatch(actionCreator.onFollow(userId));
                });
        },
        unfollowUser: (userId) => (dispatch) => {
            dispatch(actionCreator.onToggleFollowing(true, userId));
            api.unfollowUser(userId)
                .then(data => {
                    dispatch(actionCreator.onToggleFollowing(false, userId));
                    if (!data.resultCode)
                        dispatch(actionCreator.onUnfollow(userId));
                });
        },
        setAuthUser: () => (dispatch) => {
            api.authMe().then(data => {
                if (!data.resultCode) {
                    let {id, login, email} = data.data;
                    dispatch(actionCreator.onSetAuthUser(id, email, login));
                }
            });
        },
        getProfileInfo: (userId) => (dispatch) => {
            dispatch(actionCreator.onToggleIsFetching(true));
            api.getProfileInfo(userId).then(profileInfo => {
                api.getProfileStatus(userId).then(status => {
                    dispatch(actionCreator.onToggleIsFetching(false));
                    dispatch(actionCreator.onSetProfile({...profileInfo, status}));
                })
            });
        },
        updateProfileStatus: (newStatus) => (dispatch) => {
            api.updateProfileStatus(newStatus).then(data => {
                if (!data.resultCode)
                    dispatch(actionCreator.onUpdateStatus(newStatus));
            });
        }
    }
};

export default actionCreator;
export const thunkCreator = actionCreator.thunkCreator;