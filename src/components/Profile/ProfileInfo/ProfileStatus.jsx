import React from "react";

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false
    };

    toggleEditMode = (isEditing) => {
        this.setState({ editMode: isEditing })
    };

    changeStatus = (e) => {
        this.setState({ status: e.target.value})
    };

    //TODO can update status only for the current authorized user
    render() {
        return this.state.editMode
            ? <div>
                <input onChange={this.changeStatus} value={this.state.status} autoFocus={true}
                       onBlur={() => {
                           this.props.updateStatus(this.state.status);
                           this.toggleEditMode(false);
                       }}/>
            </div>
            : <div>
                <span onDoubleClick={() => this.toggleEditMode(true)}>{this.state.status}</span>
            </div>
    }
}

export default ProfileStatus;
