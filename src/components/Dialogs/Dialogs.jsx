import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <NavLink className={s.dialog} to={'/dialogs/' + props.id} activeClassName={s.item_active}>
                {props.name}
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
};

let dialogsData = [
    {id: 1, name: "Artyom"},
    {id: 2, name: "Nastya"},
    {id: 3, name: "Igor"}
];
let dialogs = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);

let messagesData = [
    {id: 1, text: "Hi!"},
    {id: 2, text: "Bye."}
];
let messages = messagesData.map(msg => <Message text={msg.text}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogs}
            </div>
            <div className={s.dialogs__messages}>
                {messages}
            </div>
        </div>
    )
};

export default Dialogs;