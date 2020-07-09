import React from "react";
import Login from "./Login";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/reducer/authReducer";

class LoginContainer extends React.Component {
    render() {
        return this.props.isAuth
            ? <Redirect to={'/profile'}/>
            : <Login onLogin={(email, password, rememberMe) => {
                this.props.login(email, password, rememberMe);
            }}/>
    }
}

export default compose(
    withRouter,
    connect((state) => ({isAuth: state.auth.isAuth}), { login })
)(LoginContainer);
