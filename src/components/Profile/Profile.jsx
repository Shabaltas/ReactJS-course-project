import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    return props.isFetching || !props.profile
        ? <Preloader/>
        : <div>
            <ProfileInfo {...props.profile}/>
            <MyPostsContainer/>
        </div>
};

export default Profile;
