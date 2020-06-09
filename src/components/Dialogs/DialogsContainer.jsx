import React from 'react';
import actionCreator from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddMsg: () => {
            dispatch(actionCreator.createAddMsgAction());
        },
        onChangeMsgInput: (newMsg) => {
            dispatch(actionCreator.createUpdateNewMsgTextAction(newMsg));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);