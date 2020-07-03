import React from "react";
import s from './Components.module.css';

//TODO get rid of copy-past, give props to children
const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.invalid && !meta.active;
    return (
        <div>
            <div className={s.text + " " + (hasError ? s.error_field : "")}>
                {props.children}
            </div>
            {hasError ? <div><span className={s.error_msg}>{meta.error}</span></div> : <></>}
        </div>
    )
};

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.invalid && !meta.active;
    return (
        <div>
            <div>
                <textarea className={(hasError ? s.error_div : "")} {...input} {...props}/>
            </div>
            {hasError ? <div><span className={s.error_msg}>{meta.error}</span></div> : <></>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.invalid && !meta.active;
    return (
        <div>
            <div>
                <input className={(hasError ? s.error_div : "")} {...input} {...props}/>
            </div>
            {hasError ? <div><span className={s.error_msg}>{meta.error}</span></div> : <></>}
        </div>
    )
};
