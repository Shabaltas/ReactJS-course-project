import React from "react";
import {connect} from "react-redux";
import {thunkCreator} from "../../redux/actionCreator";
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import {
    getAuthorizedId, getCurrentPage,
    getFollowingUsers, getIsAuth,
    getIsFetching, getPageSize,
    getUsers, getUsersTotalCount
} from "../../selectors/stateSelector";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.loadUsers(this.props.currentPage);
    };

    loadUsers = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {
        return this.props.isFetching
            ? <Preloader/>
            : <Users totalCount={this.props.totalCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     users={this.props.users}
                     onFollow={this.props.onFollow}
                     onUnfollow={this.props.onUnfollow}
                     getUsers={this.loadUsers}
                     following={this.props.following}
                     isAuth={this.props.isAuth}
                     authorizedId={this.props.authorizedId}
            />

    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        following: getFollowingUsers(state),
        authorizedId: getAuthorizedId(state),
        isAuth: getIsAuth(state)
    }
};

export default connect(mapStateToProps, {
    onFollow: thunkCreator.followUser,
    onUnfollow: thunkCreator.unfollowUser,
    getUsers: thunkCreator.getUsers
})(UsersContainer);
