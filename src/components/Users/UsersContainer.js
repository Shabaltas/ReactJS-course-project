import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(actionCreator.createFollowAction(userId));
        },
        onUnfollow: (userId) => {
            dispatch(actionCreator.createUnfollowAction(userId));
        },
        onSetUsers: (users) => {
            dispatch(actionCreator.createSetUsersAction(users));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);