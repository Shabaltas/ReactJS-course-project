import {actionTypes} from "../actionTypes";

const initialState = {
    users: [ ],
    currentPage: 1,
    totalCount: 0,
    pageSize: 10
};

function follow(state, userId) {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? {...user, followed: true} : {...user})
    };
}

function unfollow(state, userId) {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? {...user, followed: false} : {...user})
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

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FOLLOW:
            return follow(state, action.userId);
        case actionTypes.UNFOLLOW:
            return unfollow(state, action.userId);
        case actionTypes.SET_USERS:
            return setUsers(state, action.users, action.totalCount, action.currentPage);
        default:
            return state;
    }
};

export default usersReducer;