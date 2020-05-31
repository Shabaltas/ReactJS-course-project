import React from "react";
import actionCreator from "../../../redux/actionCreator";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.store.dispatch(actionCreator.createAddPostAction());
    };
    const changePostInput = (newText) => {
        props.store.dispatch(actionCreator.createUpdateNewPostTextAction(newText));
    };
    return (
        <MyPosts data={props.store.getState().profilePage} onAddPost={addPost} onChangePostInput={changePostInput}/>
    )
};

export default MyPostsContainer;