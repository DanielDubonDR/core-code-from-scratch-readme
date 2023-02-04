import React from "react";
import ContactCard from "./ConcactCard";

const ContactList = (props) => {

    const renderConcatList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} removeContact={props.removeContact}/>
        )
    })

    return (
        <div className="ui celled list">{renderConcatList}</div>
    )
}

export default ContactList;