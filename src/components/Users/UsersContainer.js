import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Users from './Users';
import dialogReducer from "../../redux/reducer/dialogReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
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
        onSetUsers: (users, totalCount, currentPage) => {
            dispatch(actionCreator.createSetUsersAction(users, totalCount, currentPage));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);