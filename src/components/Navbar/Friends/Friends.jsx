import React from 'react';
import s from "./Friends.module.css";
import Friend from "./Friend";

const Friends = (props) => {
    return (
        <div>
            <h5>FRIENDS</h5>
            <div className={s.friends}>
                {props.friends.map(friend => <Friend key={friend.id} name={friend.name} photo={friend.photo}/>)}
            </div>
        </div>
    )
};

export default Friends;