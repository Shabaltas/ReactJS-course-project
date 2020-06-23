import React from "react";
import {thunkCreator} from "../../redux/actionCreator";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        getProfileInfo: thunkCreator.getProfileInfo,
        updateProfileStatus: thunkCreator.updateProfileStatus
    }),
)(ProfileContainer);
