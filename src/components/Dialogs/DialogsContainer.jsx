import React from 'react';
import actionCreator from "../../redux/actionCreator";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
};

export default connect(mapStateToProps, actionCreator)(Dialogs);
