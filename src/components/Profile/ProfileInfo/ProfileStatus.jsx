import React, {useState} from "react";

const ProfileStatus = (props) => {
    let [inputStatus, setInputStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    const toggleEditMode = (isEditing) => {
        setEditMode(isEditing);
    };

    const changeStatus = (e) => {
        setInputStatus(e.target.value);
    };

    /*how to fix when need to change local state when global state has changed
    useEffect(() => {
        setInputStatus(props.status);
    }, [props.status]);
     */

    return editMode
        ? <div>
            <input onChange={changeStatus} value={inputStatus} autoFocus={true}
                   onBlur={() => {
                       toggleEditMode(false);
                       props.updateStatus(inputStatus);
                   }} maxLength={1000}/>
        </div>
        : <div>
            <span onDoubleClick={() => toggleEditMode(true)}>{props.status || "___________"}</span>
        </div>
}

export default ProfileStatus;
