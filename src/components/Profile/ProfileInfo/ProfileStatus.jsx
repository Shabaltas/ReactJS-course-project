import React from "react";

class ProfileStatus extends React.Component {
    state = {
        inputStatus: this.props.status,
        editMode: false
    };

    toggleEditMode = (isEditing) => {
        this.setState({ editMode: isEditing })
    };

    changeStatus = (e) => {
        this.setState({ inputStatus: e.target.value})
    };

    /*how to fix when need to change local state when global state has changed
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status)
            this.setState({ inputStatus: this.props.status})
    }*/

    //TODO can update status only for the current authorized user
    render() {
        return this.state.editMode
            ? <div>
                <input onChange={this.changeStatus} value={this.state.inputStatus} autoFocus={true}
                       onBlur={() => {
                           this.toggleEditMode(false);
                           this.props.updateStatus(this.state.inputStatus);
                       }} maxLength={300}/>
            </div>
            : <div>
                <span onDoubleClick={() => this.toggleEditMode(true)}>{this.props.status || "___________"}</span>
            </div>
    }
}

export default ProfileStatus;
