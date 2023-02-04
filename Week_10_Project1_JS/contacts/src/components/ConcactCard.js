import React from "react";

const ContactCard = ({ contact, removeContact }) => {

    const {id, name, email} = contact;

    return (
        <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user icon" className="ui avatar image" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" onClick={() =>removeContact(id)}></i>
        </div>
    )
} 

export default ContactCard;