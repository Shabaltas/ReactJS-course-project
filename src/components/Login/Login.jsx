import React from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {minLengthValidator, required} from "../common/validator/validator";
import {Input} from "../common/formcomponents/Components";

const minLength = minLengthValidator(8);

let LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"Email"} component={Input}  type={"email"} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={Input} type={"password"} validate={[required, minLength]}/>
            </div>
            <div>
                <Field name={"rememberMe"} component="input" type={"checkbox"}/> remember me
            </div>
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
        props.onLogin(values.email, values.password, values.rememberMe)
    };
    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={login}/>
        </div>
    )
};

export default Login;
