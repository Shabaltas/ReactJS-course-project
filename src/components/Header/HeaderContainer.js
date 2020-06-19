import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Header from "./Header";
import api from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.authMe();
    };

    authMe = () => {
        api.authMe().then(data => {
            if (!data.resultCode) {
                let {id, login, email} = data.data;
                this.props.onSetAuthUser(id, email, login);
            }
        });
    };

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}


const mapStateToProps = (state) => {
    return {
        userId: state.header.userId,
        email: state.header.email,
        login: state.header.login,
        isAuth: state.header.isAuth
    }
};

export default connect(mapStateToProps, actionCreator)(HeaderContainer);
