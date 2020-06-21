import React from "react";
import {thunkCreator} from "../../redux/actionCreator";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileInfo(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    ...state.profilePage,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    getProfileInfo: thunkCreator.getProfileInfo
})(withRouter(ProfileContainer));
