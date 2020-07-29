import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { Form, reduxForm} from "redux-form";
import {required} from "../common/validator/validator";
import {createField, Textarea} from "../common/formcomponents/Components";
import cn from 'classnames'; // npmjs.com/package/classnames

const NewMsgFormName = "newMsg";
let NewMsgForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            {createField("newMsg", Textarea, [required], {placeholder: "Enter new message"})}
            <button className={s.btn}> Send</button>
        </Form>)
};

NewMsgForm = reduxForm({form: NewMsgFormName})(NewMsgForm);

const Dialogs = (props) => {
    return (
        <div className={cn(s.dialogs)}>
            <div className={cn({[`${s.dialogs}-${s.items}`]: true})}>
                {props.data.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}
                                                          photo={dialog.photo}/>)}
            </div>
            <div className={cn({[`${s.dialogs}-${s.messages}`]: true})}>
                {props.data.messages.map(msg => <Message key={msg.id} text={msg.text}/>)}
            </div>
            <NewMsgForm onSubmit={(values) => { props.onAddMsg(values.newMsg); props.resetForm(NewMsgFormName)}}/>
        </div>
    )
};

export default Dialogs;
