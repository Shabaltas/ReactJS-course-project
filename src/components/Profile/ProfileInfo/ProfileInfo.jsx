import React from "react";
import contentTop from "../../../resources/contentTop.jpg";
import replace from "../../../resources/personAva.png";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.top_img} src={contentTop}/>
            </div>
            <div className={s.profile__info}>
                <img className={s.ava} src={props.photos.large ? props.photos.large : replace}/>
                <div style={{padding: "10px"}}>
                    <h3>{props.fullName}</h3>
                    <h5>About me:{` ${props.aboutMe}`}</h5>
                    {Object.entries(props.contacts).map(e => e[1] ? <div>{e[0]}: {e[1]}</div> : <></>)}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
