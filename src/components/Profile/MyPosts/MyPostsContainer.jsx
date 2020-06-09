import React from "react";
import actionCreator from "../../../redux/actionCreator";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(actionCreator.createAddPostAction());
        },
        onChangePostInput: (newText) => {
            dispatch(actionCreator.createUpdateNewPostTextAction(newText));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);