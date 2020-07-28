import api from "../../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    userId: 0,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const SET_AUTH_USER = "auth/SET_AUTH_USER";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

function setAuthUser(state, userId, email, login, isAuth) {
    return {
        ...state,
        userId,
        email,
        login,
        isAuth,
        captchaUrl: null
    }
}

function setCaptchaUrl(state, captchaUrl) {
    return {
        ...state,
        captchaUrl
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return setAuthUser(state, action.id, action.email, action.login, action.isAuth);
        case SET_CAPTCHA_URL:
            return setCaptchaUrl(state, action.captchaUrl);
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

function setCaptchaUrlAction(captchaUrl) {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
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

export function login(email, password, rememberMe, captcha) {
    return async dispatch => {
        const data = await api.login(email, password, rememberMe, captcha);
        switch (data.resultCode) {
            case 0:
                api.defaultId = data.data.userId;
                dispatch(getAuthUser());
                break;
            case 10:
                dispatch(getCaptchaUrl());
                break;
            default:
                dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : "Some error occurred"}));
                break;
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

function getCaptchaUrl() {
    return async dispatch => {
        const captchaUrl = await api.getCaptchaUrl();
        dispatch(setCaptchaUrlAction(captchaUrl));
    }
}
