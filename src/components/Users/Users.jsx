import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.jpg";
import * as axios from 'axios';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0)
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                props.onSetUsers(res.data.items)
            });
    };

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                           followed={user.followed} photo={user.photos.small ? user.photos.small : ava2}
                                           follow={props.onFollow} unfollow={props.onUnfollow}/>)}
        </div>
    )
};

export default Users;