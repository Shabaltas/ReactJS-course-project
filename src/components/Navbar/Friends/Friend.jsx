import React from 'react';
import s from "./Friends.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.friend_ava} src={props.photo}/>
            <div>{props.name}</div>
        </div>
    )
};

export default Friend;