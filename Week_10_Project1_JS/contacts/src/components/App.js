import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContac';
import ContactList from './ContactList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
    console.log(contacts);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} removeContact={removeContactHandler}/>
    </div>
  );
}

export default App;