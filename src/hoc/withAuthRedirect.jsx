import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

const withAuthRedirect = (Component) => {
    const RedirectWrapper = (props) => {
        return props.isAuth
            ? <Component {...props}/>
            : <Redirect to='/login'/>
    };

    return connect(mapStateToProps)(RedirectWrapper);
};

export default withAuthRedirect;