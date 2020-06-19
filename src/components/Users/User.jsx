import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.user}>
            <div>
                <NavLink to={`/profile/${props.id}`}><img className={s.user_ava} src={props.photo}/></NavLink>
                <span>{props.name}</span>
            </div>
            <span>{props.country}</span>
            <div>
                {props.followed
                    ? <button onClick={() => props.unfollow(props.id)} disabled={props.inFollowing}>UNFOLLOW</button>
                    : <button onClick={() => props.follow(props.id)} disabled={props.inFollowing}>FOLLOW</button>}
            </div>
        </div>
    )
};

export default User;
