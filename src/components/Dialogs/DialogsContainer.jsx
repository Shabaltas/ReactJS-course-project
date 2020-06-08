import React from 'react';
import actionCreator from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import MyContext from "../../MyContext";

const DialogsContainer = (props) => {
    return (
        <MyContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(actionCreator.createAddMsgAction());
                    };
                    const updateNewMsgText = (newMsg) => {
                        store.dispatch(actionCreator.createUpdateNewMsgTextAction(newMsg));
                    };
                    return <Dialogs data={store.getState().dialogsPage} onAddMsg={addMessage}
                                    onChangeMsgInput={updateNewMsgText}/>
                }
            }
        </MyContext.Consumer>
    )
};

export default DialogsContainer;