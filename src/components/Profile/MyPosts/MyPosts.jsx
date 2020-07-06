import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthValidator, required} from "../../common/validator/validator";
import {Textarea} from "../../common/formcomponents/Components";

const postMaxLength = 300;
const maxLength = maxLengthValidator(postMaxLength);
let NewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field placeholder={"New post"} component={Textarea} name="newPostText" validate={[required, maxLength]} maxLength={postMaxLength}/>
            <div><button className={s.btnNewPost} type="submit">New post</button></div>
        </Form>
    )
};

NewPostForm = reduxForm({
    form: 'newPost'
})(NewPostForm);

const MyPosts = (props) => {
    return (
        <div className={s.my_posts_wrapper}>
            My posts<br/>
            <NewPostForm onSubmit={values => props.onAddPost(values.newPostText)}/>
            <div>
                {props.posts.map(post => <Post key={post.id} msg={post.msg} likes={post.likes}/>)}
            </div>
        </div>
    )
};

export default MyPosts;
