import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {props.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)}
            </div>
            <div className={s.dialogs__messages}>
                {props.messages.map(msg => <Message text={msg.text}/>)}
            </div>
        </div>
    )
};

export default Dialogs;