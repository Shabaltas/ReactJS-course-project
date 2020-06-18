import React from "react";
import User from "./User";
import ava2 from "../../resources/ava2.png";
import s from './Users.module.css';

const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    for (let p = 1;p <= pagesCount; p++) {
        pages.push(p);
    }
    return (
        <div>
            <div>
                {pages.map(page => <span key={page} onClick={(e) => props.getUsers(page)}
                                         className={`${s.page} ${props.currentPage === page && s.selectedPage}`}>{page}</span>)}
            </div>
            {props.users.map(user => <User key={user.id} id={user.id} name={user.name} country={user.country}
                                                followed={user.followed}
                                                photo={user.photos.small ? user.photos.small : ava2}
                                                follow={props.onFollow} unfollow={props.onUnfollow}/>)}
        </div>
    );
    ;
}

export default Users;
