import React, {useState} from "react";

const AddContact = ({ addContactHandler }) => {
    const [newConctact, setNewContact] = useState({name: "", email: ""});

    const add = (event) => {
        event.preventDefault();
        if( newConctact.name === "" || newConctact.email === "") {
            alert("All fields are mandatory");
            return;
        }

        addContactHandler(newConctact);
        setNewContact({name: "", email: ""});
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={newConctact.name} onChange={(event) =>
                        setNewContact({...newConctact, name: event.target.value})
                    }/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={newConctact.email} onChange={(event) =>
                        setNewContact({...newConctact, email: event.target.value})
                    }/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;