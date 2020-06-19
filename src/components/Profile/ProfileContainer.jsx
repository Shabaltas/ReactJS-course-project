import React from "react";
import actionCreator from "../../redux/actionCreator";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import configs from "../../configs";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.onToggleIsFetching(true);
        axios.get(`${configs.apiUrl+configs.apiProfileEndpoint}/${userId ? userId : 2}`).then(res => {
            this.props.onToggleIsFetching(false);
            this.props.onSetProfile(res.data);
        });
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => state.profilePage;

export default connect(mapStateToProps, actionCreator)(withRouter(ProfileContainer));
