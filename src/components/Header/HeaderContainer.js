import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {withRouter} from "react-router-dom";
import {getIsAuth, getLogin} from "../../selectors/stateSelector";
import {logout} from "../../redux/reducer/authReducer";

const HeaderContainer = (props) => {
    const logout = () => {
        props.logout();
    };

    return <Header login={props.login} isAuth={props.isAuth} logout={logout}/>
};

const mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state)
    }
};

export default withRouter(connect(mapStateToProps, {logout})(HeaderContainer));
