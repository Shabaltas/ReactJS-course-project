import React from "react";
import s from './Users.module.css';

const User = (props) => {
    return (
        <div className={s.user}>
            <div>
                <img className={s.user_ava} src={props.photo}/>
                <span>{props.name}</span>
            </div>
            <span>{props.country}</span>
            <div>
                {props.followed
                    ? <button onClick={() => props.unfollow(props.id)} >UNFOLLOW</button>
                    : <button onClick={() => props.follow(props.id)} >FOLLOW</button>}
            </div>
        </div>
    )
};

export default User;