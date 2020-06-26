import React from "react";
import Login from "./Login";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {thunkCreator} from "../../redux/actionCreator";
import {connect} from "react-redux";

class LoginContainer extends React.Component {
    login = (email, password, rememberMe) => {
        this.props.login(email, password, rememberMe);
        this.props.history.push('/profile');
    };

    render() {
        return <Login onLogin={this.login}/>
    }
}

export default compose(
    withRouter,
    connect((state) => ({}), {login: thunkCreator.login})
)(LoginContainer);
