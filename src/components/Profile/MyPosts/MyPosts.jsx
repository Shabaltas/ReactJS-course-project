import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
    return (
        <div className={s.my_posts_wrapper}>
            My posts
            <button className={s.btnNewPost}>New post</button>
            <div>
                {props.posts.map(post => <Post msg={post.msg} likes={post.likes}/>)}
            </div>
        </div>
    )
};

export default MyPosts;