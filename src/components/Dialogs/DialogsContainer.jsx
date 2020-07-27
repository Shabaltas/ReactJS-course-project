import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsData} from "../../selectors/stateSelector";
import {onAddMsg} from "../../redux/reducer/dialogReducer";
import withFormReset from "../../hoc/withFormReset";

const mapStateToProps = (state) => ({ data: getDialogsData(state) });

export default compose(
    withAuthRedirect,
    withFormReset,
    connect(mapStateToProps, { onAddMsg })
)(Dialogs);
