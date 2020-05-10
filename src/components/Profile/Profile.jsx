import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={props.data}
                     addPost={props.addPost}
                     changePostInput={props.changePostInput}/>
        </div>
    )
};

export default Profile;