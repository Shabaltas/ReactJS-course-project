import {actionTypes} from "../actionTypes";

const initialState = {
    userId: 0,
    email: null,
    login: null,
    isAuth: false
};



function setUsers(state, userId, email, login) {
    return {
        ...state,
        userId,
        email,
        login,
        isAuth: true
    }
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_USER:
            return setUsers(state, action.id, action.email, action.login);
        default:
            return state;
    }
};

export default usersReducer;
