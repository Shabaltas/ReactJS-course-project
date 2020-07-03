import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const UserPosts = (props) => {
    return (
        <div className={s.my_posts_wrapper}>
            Posts<br/>
            <div>
                {props.posts.map(post => <Post key={post.id} msg={post.msg} likes={post.likes}/>)}
            </div>
        </div>
    )
};

export default UserPosts;
