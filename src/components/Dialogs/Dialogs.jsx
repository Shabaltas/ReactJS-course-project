import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    let newMessageRef = React.createRef();
    const addMessage = () => {
        props.addMessage(newMessageRef.current.value);
        newMessageRef.current.value = '';
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {props.data.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} photo={dialog.photo}/>)}
            </div>
            <div className={s.dialogs__messages}>
                {props.data.messages.map(msg => <Message text={msg.text}/>)}
            </div>
            <textarea ref={newMessageRef}/>
            <button onClick={addMessage} className={s.btn}> Send</button>
        </div>
    )
};

export default Dialogs;