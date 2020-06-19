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
                    itemsCountPerPage={this.props.pageSize}
                    count={pagesCount}
                    onChange={(e, pageNumber) => this.props.getUsers(pageNumber)}
                />
                {this.props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                                    followed={user.followed}
                                                    photo={user.photos.small ? user.photos.small : ava2}
                                                    follow={this.props.onFollow} unfollow={this.props.onUnfollow}/>)}
            </div>
        );
    }
}

export default Users;
