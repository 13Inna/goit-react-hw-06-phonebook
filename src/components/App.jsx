import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


const mountContacts = localStorage.getItem('contacts');
const parseContacts = JSON.parse(mountContacts);

const App = () => {
  const [contacts, setContacts] = useState(parseContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
  const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

       if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setContacts(prevState => [newContact, ...prevState]);
    return true;
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
          <Filter value={filter}  onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
      </div>
    );
  }


export default App;
