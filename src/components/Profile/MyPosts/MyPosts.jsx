import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
    return (
        <div className={s.my_posts_wrapper}>
            My posts
            <div>
                <button>New post</button>
            </div>
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};

export default MyPosts;