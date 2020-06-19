import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import * as axios from "axios";
import configs from "../../configs";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.authMe();
    };

    authMe = () => {
        axios.get(configs.apiUrl+configs.apiAuthMeEndpoint, {withCredentials: true}).then(res => {
            if (!res.data.resultCode) {
                let {id, login, email} = res.data.data;
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
