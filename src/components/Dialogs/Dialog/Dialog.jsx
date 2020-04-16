import s from "../Dialogs.module.css";
import React from "react";
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

export default Dialog;