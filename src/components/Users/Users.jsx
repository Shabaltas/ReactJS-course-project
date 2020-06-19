import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.png";
import Pagination from '@material-ui/lab/Pagination';
import api from "../../api/api";

class Users extends React.Component {

    followUser = (userId) => {
        this.props.toggleFollowing(true, userId);
        api.followUser(userId)
            .then(data => {
                this.props.toggleFollowing(false, userId);
                if (!data.resultCode)
                    this.props.onFollow(userId);
            });
    };

    unfollowUser = (userId) => {
        this.props.toggleFollowing(true, userId);
        api.unfollowUser(userId)
            .then(data => {
                this.props.toggleFollowing(false, userId);
                if (!data.resultCode)
                    this.props.onUnfollow(userId);
            });
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        return (
            <div>
                <Pagination
                    page={this.props.currentPage}
                    count={pagesCount}
                    onChange={(e, pageNumber) => this.props.getUsers(pageNumber)}
                />
                {this.props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                                    followed={user.followed}
                                                    photo={user.photos.small ? user.photos.small : ava2}
                                                    follow={this.followUser.bind(undefined, user.id)}
                                                    unfollow={this.unfollowUser.bind(undefined, user.id)}
                                                    inFollowing={this.props.following.some(id => id === user.id)}/>)}
            </div>
        );
    }
}

export default Users;
