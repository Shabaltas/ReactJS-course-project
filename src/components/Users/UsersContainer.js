import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Users from './Users';
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    };

    getUsers = (page) => {
        this.props.onToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            this.props.onToggleIsFetching(false);
            this.props.onSetUsers(res.data.items, res.data.totalCount, page);
        });
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
                         getUsers={this.getUsers}/>
        }</>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, actionCreator)(UsersContainer);
