import React from 'react';
import ac from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsData} from "../../selectors/stateSelector";

const mapStateToProps = (state) => ({ data: getDialogsData(state) });

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        onChangeMsgInput: ac.onChangeMsgInput,
        onAddMsg: ac.onAddMsg
    })
)(Dialogs);
