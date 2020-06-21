import React from "react";
import {connect} from "react-redux";
import {thunkCreator} from "../../redux/actionCreator";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.authMe();
    };

    authMe = () => {
        this.props.setAuthMe();
    };

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}


const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    setAuthMe: thunkCreator.setAuthUser
})(HeaderContainer);
