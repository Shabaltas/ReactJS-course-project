import React from "react";
import {connect} from "react-redux";
import actionCreator from "../../redux/actionCreator";
import Users from './Users';
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import configs from "../../configs";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    };

    getUsers = (page) => {
        this.props.onToggleIsFetching(true);
        axios.get(`${configs.apiUrl+configs.apiUsersEndpoint}?page=${page}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {
                "api-key": "1b44dd06-2645-4fda-bc7a-6c8f3e5f9b32"
                }
            })
            .then(res => {
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
