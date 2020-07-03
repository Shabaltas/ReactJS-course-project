import actionTypes from "./actionTypes";
import api from "../api/api";

const actionCreator = {
    onAddMsg: (msg) => ({
        type: actionTypes.ADD_MSG,
        newMsg: msg
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
                }
            })
        },
        logout: () => (dispatch) => {
            debugger
            api.logout().then(data => {
                if (!data.resultCode) {
                    api.defaultId = 2;
                    dispatch(thunkCreator.setAuthUser());
                }
            })
        }
    }
};

export default actionCreator;
export const thunkCreator = actionCreator.thunkCreator;
