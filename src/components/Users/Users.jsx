import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.png";
import Pagination from '@material-ui/lab/Pagination';

class Users extends React.Component {

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
                                                    followed={user.followed} canFollow={this.props.isAuth && this.props.authorizedId !== user.id}
                                                    photo={user.photos.small ? user.photos.small : ava2}
                                                    follow={this.props.onFollow.bind(undefined, user.id)}
                                                    unfollow={this.props.onUnfollow.bind(undefined, user.id)}
                                                    inFollowing={this.props.following.some(id => id === user.id)}/>)}
            </div>
        );
    }
}

export default Users;
