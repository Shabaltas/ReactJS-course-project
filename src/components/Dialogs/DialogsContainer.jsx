import React from 'react';
import ac from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    onChangeMsgInput: ac.onChangeMsgInput,
    onAddMsg: ac.onAddMsg
})(Dialogs);
