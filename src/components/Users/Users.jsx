import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.jpg";
import * as axios from 'axios';
import s from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.currentPage);
    };

    getUsers = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            this.props.onSetUsers(res.data.items, res.data.totalCount, page);
        });
    };

    render() {
        debugger;
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        for (let p = 1;p <= pagesCount; p++) {
            pages.push(p);
        }
        return (
            <div>
                <div>
                    { pages.map(page => <span onClick={(e) => this.getUsers(page)}
                                                className={`${s.page} ${this.props.currentPage === page && s.selectedPage}`}>{page}</span>) }
                </div>
                {this.props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                                    followed={user.followed}
                                                    photo={user.photos.small ? user.photos.small : ava2}
                                                    follow={this.props.onFollow} unfollow={this.props.onUnfollow}/>)}
            </div>
        )
    }
}

export default Users;