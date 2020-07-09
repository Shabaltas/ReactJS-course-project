import api from "../../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    userId: 0,
    email: null,
    login: null,
    isAuth: false
};

const SET_AUTH_USER = "auth/SET_AUTH_USER";

function setAuthUser(state, userId, email, login, isAuth) {
    return {
        ...state,
        userId,
        email,
        login,
        isAuth
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return setAuthUser(state, action.id, action.email, action.login, action.isAuth);
        default:
            return state;
    }
};

export function setAuthUserAction(id, email, login, isAuth) {
    return {
        type: SET_AUTH_USER,
        id, email, login, isAuth
    }
}

export function getAuthUser() {
    return async dispatch => {
        const data = await api.authMe();
        if (!data.resultCode) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserAction(id, email, login, true));
        }
    }
}

export function login(email, password, rememberMe) {
    return async dispatch => {
        const data = await api.login(email, password, rememberMe);
        if (!data.resultCode) {
            api.defaultId = data.data.userId;
            dispatch(getAuthUser());
        } else {
            dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : "Some error occurred"}));
        }
    };
}

export function logout() {
    return async dispatch => {
        const data = await api.logout();
        if (!data.resultCode) {
            dispatch(setAuthUserAction(2, null, null, false));
        }
    };
}
