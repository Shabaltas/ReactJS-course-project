import React from "react";
import actionCreator from "../../../redux/actionCreator";
import MyPosts from "./MyPosts";
import MyContext from "../../../MyContext";

const MyPostsContainer = (props) => {
    return (
        <MyContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(actionCreator.createAddPostAction());
                    };
                    const changePostInput = (newText) => {
                        store.dispatch(actionCreator.createUpdateNewPostTextAction(newText));
                    };
                    return <MyPosts data={store.getState().profilePage} onAddPost={addPost}
                                    onChangePostInput={changePostInput}/>
                }
            }
        </MyContext.Consumer>
    )
};

export default MyPostsContainer;