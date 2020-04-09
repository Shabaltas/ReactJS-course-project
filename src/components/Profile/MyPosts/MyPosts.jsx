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
                <Post msg='feeeeee...' likes={1}/>
                <Post msg='LOL' likes={23}/>
            </div>
        </div>
    )
};

export default MyPosts;