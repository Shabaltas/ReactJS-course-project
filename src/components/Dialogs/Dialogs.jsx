import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    const onChangeMsgInput = (e) => {
        props.onChangeMsgInput(e.target.value);
    };
    return props.isAuth
        ? <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {props.data.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}
                                                          photo={dialog.photo}/>)}
            </div>
            <div className={s.dialogs__messages}>
                {props.data.messages.map(msg => <Message key={msg.id} text={msg.text}/>)}
            </div>
            <textarea value={props.data.changeableMsgTxt} onChange={onChangeMsgInput}/>
            <button onClick={props.onAddMsg} className={s.btn}> Send</button>
        </div>
        : <Redirect to='/login'/>
};

export default Dialogs;