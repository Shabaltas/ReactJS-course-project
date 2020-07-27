import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";
import UserPosts from "./MyPosts/UserPosts";

class Profile extends React.Component {
    render() {
        return this.props.isFetching || !this.props.profile
            ? <Preloader/>
            : <div>
                <ProfileInfo profile={this.props.profile} status={this.props.status}
                             updateStatus={this.props.updateProfileStatus}
                             isAuthedUser={this.props.authedUser} savePhoto={this.props.savePhoto}
                             updateProfile={this.props.updateProfile}/>
                {this.props.authedUser ? <MyPostsContainer posts={this.props.posts}/> :
                    <UserPosts posts={this.props.posts}/>}
            </div>
    };
}

export default Profile;
