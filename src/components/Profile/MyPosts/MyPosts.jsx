import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
    let newPostRef = React.createRef();
    const addPost = () => {
        props.addPost(newPostRef.current.value);
    };
    const changePostInput = () => {
        props.changePostInput(newPostRef.current.value)
    };
    return (
        <div className={s.my_posts_wrapper}>
            My posts<br/>
            <textarea ref={newPostRef} value={props.data.changeablePostMsg} onChange={changePostInput}/>
            <button className={s.btnNewPost} onClick={addPost}>New post</button>
            <div>
                {props.data.posts.map(post => <Post msg={post.msg} likes={post.likes}/>)}
            </div>
        </div>
    )
};

export default MyPosts;