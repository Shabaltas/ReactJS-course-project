import actionTypes from "./actionTypes";
import api from "../api/api";
import {stopSubmit} from "redux-form";

const actionCreator = {
    onAddMsg: (msg) => ({
        type: actionTypes.ADD_MSG,
        newMsg: msg
    }),
    onDeletePost: (postId) => ({
        type: actionTypes.DELETE_POST,
        postId
    }),
    onAddPost: (post) => ({
        type: actionTypes.ADD_POST,
        newPost: post
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
    onSetProfile: (profile, status) => ({
        type: actionTypes.SET_PROFILE,
        profile,
        status
    }),
    onSetAuthUser: (id, email, login, isAuth) => ({
        type: actionTypes.SET_AUTH_USER,
        id, email, login, isAuth
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
    onInitialized: () => ({type: actionTypes.INITIALIZED_SUCCESSFULLY}),
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
            return api.authMe().then(data => {
                if (!data.resultCode) {
                    let {id, login, email} = data.data;
                    dispatch(actionCreator.onSetAuthUser(id, email, login, true));
                }
            });
        },
        getProfileInfo: (userId) => (dispatch) => {
            dispatch(actionCreator.onToggleIsFetching(true));
            api.getProfileInfo(userId).then(profile => {
                api.getProfileStatus(userId).then(status => {
                    dispatch(actionCreator.onToggleIsFetching(false));
                    dispatch(actionCreator.onSetProfile(profile, status));
                })
            });
        },
        updateProfileStatus: (newStatus) => (dispatch) => {
            api.updateProfileStatus(newStatus).then(data => {
                if (!data.resultCode)
                    dispatch(actionCreator.onUpdateStatus(newStatus));
            });
        },
        login: (email, password, rememberMe) => (dispatch) => {
            api.login(email, password, rememberMe).then(data => {
                if (!data.resultCode) {
                    api.defaultId = data.data.userId;
                    dispatch(thunkCreator.setAuthUser());
                } else {
                    dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : "Some error occurred"}));
                }
            })
        },
        logout: () => (dispatch) => {
            api.logout().then(data => {
                if (!data.resultCode) {
                    dispatch(actionCreator.onSetAuthUser(2, null, null, false));
                }
            })
        },
        initializeApp: () => (dispatch) => {
            dispatch(thunkCreator.setAuthUser())
                .then(() => dispatch(actionCreator.onInitialized()))
        }
    }
};

export default actionCreator;
export const thunkCreator = actionCreator.thunkCreator;
