import React from "react";
import contentTop from "../contentTop.jpg";
import ava from "../ava.jpg";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={contentTop}/>
            </div>
            <div>
                <img src={ava}/>
                ava + disc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;