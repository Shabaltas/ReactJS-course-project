import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

let postsData = [
    {id: 1, msg: "How r u all", likes: 12},
    {id: 2, msg: "LOL", likes: 0},
    {id: 3, msg: "dead", likes: 2},
    {id: 4, msg: "...", likes: 1}
];

let postsItems = postsData.map(post => <Post msg={post.msg} likes={post.likes}/>);

const MyPosts = () => {
    return (
        <div className={s.my_posts_wrapper}>
            My posts
            <button className={s.btnNewPost}>New post</button>
            <div>
                {postsItems}
            </div>
        </div>
    )
};

export default MyPosts;