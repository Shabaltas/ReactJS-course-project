import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import actionCreator from "../../../redux/actionCreator";

const MyPosts = (props) => {
    let newPostRef = React.createRef();
    const addPost = () => {
        props.dispatch(actionCreator.createAddPostAction());
    };
    const changePostInput = () => {
        const newText = newPostRef.current.value;
        props.dispatch(actionCreator.createUpdateNewPostTextAction(newText))
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