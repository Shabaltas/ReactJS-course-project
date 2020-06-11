import React from "react";
import User from "./User";
import ava1 from "../../resources/ava1.jpg";
import ava2 from "../../resources/ava2.jpg";
import ava3 from "../../resources/ava3.jpg";

const Users = (props) => {
    if (props.users.length === 0)
        props.onSetUsers([
            {id: 1, name: 'Artyom', country: 'Belarus', followed: true, photo: ava1},
            {id: 2, name: 'Nastya', country: 'Russia', followed: false, photo: ava2},
            {id: 3, name: 'Igor', country: 'Germany', followed: true, photo: ava3},
        ]);

    return (
        <div>
            {props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                           followed={user.followed} photo={user.photo}
                                           follow={props.onFollow} unfollow={props.onUnfollow}/>)}
        </div>
    )
};

export default Users;