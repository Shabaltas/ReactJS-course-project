import React from "react";
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/formcomponents/Components";
import s from "../../common/formcomponents/Components.module.css";
import {required} from "../../common/validator/validator";

const ContactsInForm = (props) => {
    return (
        <div>
            {Object.entries(props.contacts).map(e =>
                <div>{e[0]}: {createField(`contacts.${e[0]}`, "input", undefined, {placeholder: e[0]})}</div>)}
        </div>
    )
};

const Contacts = (props) => {
    return (
        <div>
            {Object.entries(props.contacts).map(e => e[1]
                ? <div>{e[0]}: {e[1]}</div>
                : <></>)}
        </div>
    )
};

const ProfileData = (props) => {
    return (
        <div>
            <h4>{props.fullName}</h4>
            <h4>Contacts<br/><span style={{fontWeight:"normal"}}><Contacts contacts={props.contacts}/></span></h4>
            {
                props.lookingForAJob
                    ? <h4>I'm looking for<br/> <span style={{fontWeight:"normal"}}>{props.lookingForAJobDescription}</span></h4>
                    : <></>
            }
            <h5>About me: {props.aboutMe}</h5>
        </div>
    )
};

let ProfileDataForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <h4>Fullname</h4>{createField("fullName", Input, [required], {placeholder: "FullName"})}
            <div>
                <h4>Contacts</h4><ContactsInForm contacts={props.contacts}/>
            </div>
            {createField("lookingForAJob", "input", undefined, {type: "checkbox"}, "LookingForAJob")}
            <h4>LookingForAJobDescription</h4>
            {createField("lookingForAJobDescription", Textarea, [required])}
            <h5>About me:</h5>{createField("aboutMe", Textarea, [required])}
            {props.error
                ? <div>
                    <span className={s.error_msg}>{props.error}</span>
                </div>
                : <></>
            }
            <button type="submit">Save</button>
        </Form>
    )
};

ProfileDataForm = reduxForm({
    // a unique name for the form
    form: 'profileData'
})(ProfileDataForm);

export {ProfileData, ProfileDataForm};

