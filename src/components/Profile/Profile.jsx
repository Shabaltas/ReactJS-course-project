import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";
import UserPosts from "./MyPosts/UserPosts";

const Profile = (props) => {
    return props.isFetching || !props.profile
        ? <Preloader/>
        : <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateProfileStatus}
                         isAuthedUser={props.authedUser} savePhoto={props.savePhoto}
                         updateProfile={props.updateProfile}/>
            {props.authedUser ? <MyPostsContainer posts={props.posts}/> :
                <UserPosts posts={props.posts}/>}
        </div>
};

export default Profile;
