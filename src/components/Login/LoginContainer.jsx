import React from "react";
import Login from "./Login";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/reducer/authReducer";
import {getCaptchaUrl, getIsAuth} from "../../selectors/stateSelector";

const LoginContainer = (props) => {
    return props.isAuth
        ? <Redirect to={'/profile'}/>
        : <Login captchaUrl={props.captchaUrl} onLogin={({email, password, rememberMe, captcha}) => {
            props.login(email, password, rememberMe, captcha);
        }}/>
};

export default compose(
    withRouter,
    connect((state) => ({
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrl(state)
    }), {login})
)(LoginContainer);
