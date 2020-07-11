import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { Form, reduxForm} from "redux-form";
import {required} from "../common/validator/validator";
import {createField, Textarea} from "../common/formcomponents/Components";

let NewMsgForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            {createField("newMsg", Textarea, [required], {placeholder: "Enter new message"})}
            <button className={s.btn}> Send</button>
        </Form>)
};

NewMsgForm = reduxForm({form: "newMsg"})(NewMsgForm);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {props.data.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}
                                                          photo={dialog.photo}/>)}
            </div>
            <div className={s.dialogs__messages}>
                {props.data.messages.map(msg => <Message key={msg.id} text={msg.text}/>)}
            </div>
            <NewMsgForm onSubmit={(values) => props.onAddMsg(values.newMsg)}/>
        </div>
    )
};

export default Dialogs;
