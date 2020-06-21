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
        debugger;
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    ...state.profilePage,
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getProfileInfo: thunkCreator.getProfileInfo}),
)(ProfileContainer);
