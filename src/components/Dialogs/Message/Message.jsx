import s from "../Dialogs.module.css";
import React from "react";
import cn from "classnames";

const Message = (props) => {
    return (
        <div className={cn(s.message)}>
            {props.text}
        </div>
    )
};

export default Message;