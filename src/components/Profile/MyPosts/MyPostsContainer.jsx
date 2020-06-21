import React from "react";
import ac from "../../../redux/actionCreator";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
};

export default connect(mapStateToProps, {
    onChangePostInput: ac.onChangePostInput,
    onAddPost: ac.onAddPost
})(MyPosts);
