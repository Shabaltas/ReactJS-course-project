import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import cn from "classnames";

const Dialog = (props) => {
    return (
        <table className={cn(s.dialog)}>
            <thead>
            <tr>
                <td>
                    <img className="common_ava" src={props.photo}/>
                </td>
                <td>
                    <NavLink to={'/dialogs/' + props.id} activeClassName={s.item_active}>
                        {props.name}
                    </NavLink>
                </td>
            </tr>
            </thead>
        </table>
    )
};

export default Dialog;