import React from 'react';
import actionCreator from "../../redux/actionCreator";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const addMessage = () => {
        props.store.dispatch(actionCreator.createAddMsgAction());
    };
    const updateNewMsgText = (newMsg) => {
        props.store.dispatch(actionCreator.createUpdateNewMsgTextAction(newMsg));
    };

    return (
        <Dialogs data={props.store.getState().dialogsPage} onAddMsg={addMessage} onChangeMsgInput={updateNewMsgText}/>
    )
};

export default DialogsContainer;