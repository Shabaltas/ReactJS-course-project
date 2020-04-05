import React from "react";
import contentTop from  "../../resources/personAva.jpg";
import ava from "../../resources/ava.jpg";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.top_img} src={contentTop}/>
            </div>
            <div>
                <img className={s.ava} src={ava}/>
                ava + disc
            </div>
          <MyPosts/>
        </div>
    )
};

export default Profile;