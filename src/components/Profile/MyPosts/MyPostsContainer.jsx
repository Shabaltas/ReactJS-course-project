import React from "react";
import ac from "../../../redux/actionCreator";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

export default connect(undefined, {
    onChangePostInput: ac.onChangePostInput,
    onAddPost: ac.onAddPost
})(MyPosts);
