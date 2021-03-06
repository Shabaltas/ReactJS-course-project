import React from 'react';
import { Form, reduxForm} from "redux-form";
import {minLengthValidator, required} from "../common/validator/validator";
import {createField, Input} from "../common/formcomponents/Components";
import s from "../common/formcomponents/Components.module.css";
const minLength = minLengthValidator(8);

let LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            {createField("email", Input, [required], {type: "email", placeholder: "Email"})}
            {createField("password", Input, [required, minLength], {type: "password", placeholder: "Password"})}
            {createField("rememberMe", "input", null, {type: "checkbox"}, "remember me")}
            {props.captchaUrl && <>
                <img src={props.captchaUrl}/>
                {createField("captcha", Input, [required], {placeholder: "Enter captcha"})}
            </>}
            {props.error
                ? <div>
                    <span className={s.error_msg}>{props.error}</span>
                </div>
                : <></>
            }
            <button type="submit">Submit</button>
        </Form>
    )
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const login = (values) => {
        props.onLogin(values);
    };

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={login} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

export default Login;
