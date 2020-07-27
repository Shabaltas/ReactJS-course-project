import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAction} from "../../../redux/reducer/profileReducer";
import withFormReset from "../../../hoc/withFormReset";

export default connect(undefined, { addPost: addPostAction })(withFormReset(MyPosts));
