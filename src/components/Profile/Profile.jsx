import React from "react";
import contentTop from "../../resources/personAva.jpg";
import ava from "../../resources/ava.jpg";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.top_img} src={contentTop}/>
            </div>
            <div className={s.profile__info}>
                <img className={s.ava} src={ava}/>
                ava + disc
            </div>
        </div>
    )
};

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};

export default Profile;