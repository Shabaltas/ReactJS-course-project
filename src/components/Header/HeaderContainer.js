import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {thunkCreator} from "../../redux/actionCreator";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    logout = () => {
        this.props.logout();
        this.props.history.push('/users');
    };

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default withRouter(connect(mapStateToProps, {logout: thunkCreator.logout})(HeaderContainer));
