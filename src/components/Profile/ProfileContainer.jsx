import React from "react";
import actionCreator from "../../redux/actionCreator";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import api from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.onToggleIsFetching(true);
        api.getProfileInfo(userId).then(data => {
            this.props.onToggleIsFetching(false);
            this.props.onSetProfile(data);
        });
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => state.profilePage;

export default connect(mapStateToProps, actionCreator)(withRouter(ProfileContainer));
