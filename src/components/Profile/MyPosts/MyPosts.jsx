import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
    const onChangePostInput = (e) => {
        props.onChangePostInput(e.target.value);
    };
    return (
        <div className={s.my_posts_wrapper}>
            My posts<br/>
            <textarea value={props.data.changeablePostMsg}
                      onChange={onChangePostInput}/>
            <button className={s.btnNewPost} onClick={props.onAddPost}>New post</button>
            <div>
                {props.data.posts.map(post => <Post key={post.id} msg={post.msg} likes={post.likes}/>)}
            </div>
        </div>
    )
};

export default MyPosts;