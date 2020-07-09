import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedId, getIsAuth, getPosts, getProfile, getProfileStatus} from "../../selectors/stateSelector";
import {getProfileInfo, updateProfileStatus} from "../../redux/reducer/profileReducer";

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
        return <Profile {...this.props} authedUser={this.userId == this.props.authorizedUserId}/>
    };
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        posts: getPosts(state),
        status: getProfileStatus(state),
        authorizedUserId: getAuthorizedId(state),
        isAuth: getIsAuth(state)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getProfileInfo, updateProfileStatus
    }),
)(ProfileContainer);
