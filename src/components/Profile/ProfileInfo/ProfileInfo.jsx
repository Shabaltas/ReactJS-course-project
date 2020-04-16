import React from "react";
import contentTop from "../../../resources/personAva.jpg";
import ava from "../../../resources/ava.jpg";
import s from "./ProfileInfo.module.css";

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

export default ProfileInfo;