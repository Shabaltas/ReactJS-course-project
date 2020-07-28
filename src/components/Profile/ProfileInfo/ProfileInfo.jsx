import React, {useState} from "react";
import contentTop from "../../../resources/contentTop.jpg";
import replace from "../../../resources/personAva.png";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import {ProfileData, ProfileDataForm} from "./ProfileData";

const ProfileInfo = React.memo((props) => {

    let [editMode, setEditMode] = useState(false);

    const toggleEditMode = (isEditing) => {
        setEditMode(isEditing);
    };

    const updateProfile = (profile) => {
        props.updateProfile(profile).then(res => {
            toggleEditMode(false)
        });
    };

    const updateAvatar = e => {
        if (e.target.files.length)
         props.savePhoto(e.target.files[0]);
    };

    return (
        <div>
            <div>
                <img className={s.top_img} src={contentTop}/>
            </div>
            <div className={s.profile__info}>
                <img className={s.ava} src={props.profile.photos.large || replace}/>
                <div style={{padding: "10px"}}>
                    {
                        props.isAuthedUser
                            ? <><div><input type="file" onChange={updateAvatar}/></div><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></>
                            : <div><span>{props.status || "___________"}</span></div>
                    }
                    {
                        editMode
                        ? <ProfileDataForm {...props.profile} initialValues={props.profile} onSubmit={profile => updateProfile(profile)}/>
                        : <><ProfileData {...props.profile}/>
                          <input type="button" value="Edit" hidden={!props.isAuthedUser} onClick={() => toggleEditMode(true)}/></>
                    }
                </div>
            </div>
        </div>
    )
});

export default ProfileInfo;
