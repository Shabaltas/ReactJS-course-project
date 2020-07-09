import React from "react";
import {connect} from "react-redux";
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import {
    getAuthorizedId, getCurrentPage,
    getFollowingUsers, getIsAuth,
    getIsFetching, getPageSize,
    getUsers, getUsersTotalCount
} from "../../selectors/stateSelector";
import {fetchUsers, followUser, unfollowUser} from "../../redux/reducer/userReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.loadUsers(this.props.currentPage);
    };

    loadUsers = (page) => {
        this.props.fetchUsers(page, this.props.pageSize);
    };

    render() {
        return this.props.isFetching
            ? <Preloader/>
            : <Users totalCount={this.props.totalCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     users={this.props.users}
                     onFollow={this.props.followUser}
                     onUnfollow={this.props.unfollowUser}
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
    followUser, unfollowUser, fetchUsers
})(UsersContainer);
