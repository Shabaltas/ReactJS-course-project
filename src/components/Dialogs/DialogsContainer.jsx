import React from 'react';
import ac from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        onChangeMsgInput: ac.onChangeMsgInput,
        onAddMsg: ac.onAddMsg
    })
)(Dialogs);
