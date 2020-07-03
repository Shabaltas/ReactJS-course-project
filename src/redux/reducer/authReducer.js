import actionTypes from "../actionTypes";

const initialState = {
    userId: 0,
    email: null,
    login: null,
    isAuth: false
};

function setUsers(state, userId, email, login, isAuth) {
    return {
        ...state,
        userId,
        email,
        login,
        isAuth
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_USER:
            return setUsers(state, action.id, action.email, action.login, action.isAuth);
        default:
            return state;
    }
};

export default authReducer;
