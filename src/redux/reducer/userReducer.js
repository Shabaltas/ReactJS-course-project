import api from "../../api/api";
import {updateObjectInArray} from "../../utils/utils";

const initialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
    isFetching: false,
    following: []
};

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const TOGGLE_FOLLOWING = "users/TOGGLE_FOLLOWING";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";

function follow(state, userId) {
    return {
        ...state,
        users: updateObjectInArray(state.users, "id", userId, {followed: true})
    };
}

function unfollow(state, userId) {
    return {
        ...state,
        users: updateObjectInArray(state.users, "id", userId, {followed: false})
    };
}

function setUsers(state, users, totalCount, currentPage) {
    return {
        ...state,
        users: [...users],
        currentPage,
        totalCount,
    }
}

function toggleIsFetching(state, isFetching) {
    return {
        ...state,
        isFetching
    }
}

function toggleFollowing(state, isFetching, userId) {
    return {
        ...state,
        following: isFetching ? [...state.following, userId] : state.following.filter(id => id !== userId)
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return follow(state, action.userId);
        case UNFOLLOW:
            return unfollow(state, action.userId);
        case SET_USERS:
            return setUsers(state, action.users, action.totalCount, action.currentPage);
        case TOGGLE_IS_FETCHING:
            return toggleIsFetching(state, action.isFetching);
        case TOGGLE_FOLLOWING:
            return toggleFollowing(state, action.isFetching, action.userId);
        default:
            return state;
    }
};

export function followAction(userId) {
    return {
        type: FOLLOW,
        userId
    }
}

export function unfollowAction(userId) {
    return {
        type: UNFOLLOW,
        userId
    }
}

export function setUsersAction(users, totalCount, currentPage) {
    return {
        type: SET_USERS,
        users,
        totalCount,
        currentPage
    }
}

export function toggleIsFetchingAction(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export function toggleFollowingAction(isFetching, userId) {
    return {
        type: TOGGLE_FOLLOWING,
        isFetching,
        userId
    }
}

export function fetchUsers(page, pageSize) {
    return async dispatch => {
        dispatch(toggleIsFetchingAction(true));
        const users = await api.getUsers(page, pageSize);
        dispatch(toggleIsFetchingAction(false));
        dispatch(setUsersAction(users.items, users.totalCount, page));
    }
}

export function followUser(userId) {
    return followUnfollow(userId, api.followUser, followAction(userId));
}

export function unfollowUser(userId) {
    return followUnfollow(userId, api.unfollowUser, unfollowAction(userId));
}

function followUnfollow(userId, apiCall, action) {
    return async dispatch => {
        dispatch(toggleFollowingAction(true, userId));
        const data = await apiCall(userId);
        dispatch(toggleFollowingAction(false, userId));
        if (!data.resultCode)
            dispatch(action);
    }
}