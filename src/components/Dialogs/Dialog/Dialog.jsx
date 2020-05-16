import s from "../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <table className={s.dialog}>
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