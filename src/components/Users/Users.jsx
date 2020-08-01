import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.png";
import Pagination from '@material-ui/lab/Pagination';

const Users = (props) => {
    return (
        <div>
            <Pagination
                page={props.currentPage}
                count={Math.ceil(props.totalCount / props.pageSize)}
                onChange={(e, pageNumber) => props.getUsers(pageNumber)}
            />
            {props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                                followed={user.followed}
                                                canFollow={props.isAuth && props.authorizedId !== user.id}
                                                photo={user.photos.small ? user.photos.small : ava2}
                                                follow={props.onFollow.bind(undefined, user.id)}
                                                unfollow={props.onUnfollow.bind(undefined, user.id)}
                                                inFollowing={props.following.some(id => id === user.id)}/>)}
        </div>
    );
};

export default Users;
