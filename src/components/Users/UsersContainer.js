import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import {
    getAuthorizedId,
    getCurrentPage,
    getFollowingUsers,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getUsers,
    getUsersTotalCount
} from "../../selectors/stateSelector";
import {fetchUsers, followUser, unfollowUser} from "../../redux/reducer/userReducer";

const UsersContainer = (props) => {
    const loadUsers = (page) => {
        props.fetchUsers(page, props.pageSize);
    };

    useEffect(() => {
        loadUsers(props.currentPage)
    }, []);

    return props.isFetching
        ? <Preloader/>
        : <Users totalCount={props.totalCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 users={props.users}
                 onFollow={props.followUser}
                 onUnfollow={props.unfollowUser}
                 getUsers={loadUsers}
                 following={props.following}
                 isAuth={props.isAuth}
                 authorizedId={props.authorizedId}
        />
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
