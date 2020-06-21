import React from "react";
import {connect} from "react-redux";
import {thunkCreator} from "../../redux/actionCreator";
import Users from './Users';
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.loadUsers(this.props.currentPage);
    };

    loadUsers = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {
        return <>{
            this.props.isFetching
                ? <Preloader/>
                : <Users totalCount={this.props.totalCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onFollow={this.props.onFollow}
                         onUnfollow={this.props.onUnfollow}
                         getUsers={this.loadUsers}
                         following={this.props.following}
                         isAuth={this.props.isAuth}/>
        }</>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.following,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    onFollow: thunkCreator.followUser,
    onUnfollow: thunkCreator.unfollowUser,
    getUsers: thunkCreator.getUsers
})(UsersContainer);
