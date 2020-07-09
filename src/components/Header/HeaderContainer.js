import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {withRouter} from "react-router-dom";
import {getIsAuth, getLogin} from "../../selectors/stateSelector";
import {logout} from "../../redux/reducer/authReducer";

class HeaderContainer extends React.Component {
    logout = () => {
        this.props.logout();
    };

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state)
    }
};

export default withRouter(connect(mapStateToProps, { logout })(HeaderContainer));
