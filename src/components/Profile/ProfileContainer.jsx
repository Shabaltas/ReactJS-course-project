import React from "react";
import {thunkCreator} from "../../redux/actionCreator";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    userId;
    componentDidMount() {
        this.userId = this.props.match.params.userId || this.props.authorizedUserId;
        if (this.userId)
            this.props.getProfileInfo(this.userId);
        else
            this.props.history.push('/login');
    };

    render() {
        debugger;
        return <Profile {...this.props} authedUser={ this.userId == this.props.authorizedUserId}/>
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getProfileInfo: thunkCreator.getProfileInfo,
        updateProfileStatus: thunkCreator.updateProfileStatus
    }),
)(ProfileContainer);
