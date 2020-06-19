import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import api from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    };

    getUsers = (page) => {
        this.props.onToggleIsFetching(true);
        api.getUsers(page, this.props.pageSize).then(data => {
            this.props.onToggleIsFetching(false);
            this.props.onSetUsers(data.items, data.totalCount, page);
        });
    };

    render() {
        debugger;
        return <>{
            this.props.isFetching
                ? <Preloader/>
                : <Users totalCount={this.props.totalCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onFollow={this.props.onFollow}
                         onUnfollow={this.props.onUnfollow}
                         getUsers={this.getUsers}
                         toggleFollowing={this.props.onToggleFollowing}
                         following={this.props.following}/>
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
        following: state.usersPage.following
    }
};

export default connect(mapStateToProps, actionCreator)(UsersContainer);
