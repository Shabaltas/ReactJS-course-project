import React from "react";
import s from './Components.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.invalid && !meta.active;
    return (
        <div>
            <div className={s.form_control + " " + (hasError ? s.error_div : "")}>
                {props.children}
            </div>
            {hasError ? <div><span className={s.error_msg}>{meta.error}</span></div> : <></>}
        </div>
    )
};

export const Textarea = ({input, meta, children, ...childProps}) => {
    return (
        <FormControl input={input} meta={meta}>
            <textarea {...input} {...childProps}/>
        </FormControl>)
};

export const Input = ({input, meta, children, ...childProps}) =>
    <FormControl input={input} meta={meta}>
        <input {...input} {...childProps}/>
    </FormControl>;

export function createField(name, component, validators, props, text = "") {
    return (
        <div>
            <Field name={name} component={component} validate={validators}
                   {...props}/> {text}
        </div>
    )
}

