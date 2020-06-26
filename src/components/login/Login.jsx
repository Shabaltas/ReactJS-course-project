import React from 'react';
import {Field, Form, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"Email"} component="input"  type={"email"}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component="input" type={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component="input" type={"checkbox"}/> remember me
            </div>
            <button type="submit">Submit</button>
        </Form>
    )
};

const ReduxLoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const login = (values) => {
        props.onLogin(values.email, values.password, values.rememberMe)
    };
    return (
        <div>
            <h2>Login</h2>
            <ReduxLoginForm onSubmit={login}/>
        </div>
    )
};

export default Login;