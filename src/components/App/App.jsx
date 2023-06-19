import { useState, useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from '../Form/Form';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = newContact =>
    setContacts(prevState => [...prevState, ...newContact]);

  const isInList = name =>
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  const onChangeFilter = e => setFilter(e.target.value);

  const deleteHandle = contactId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form addContact={addContact} isInList={isInList} />
      <h2>Contacts</h2>
      <Filter name="filter" value={filter} onChange={onChangeFilter} />
      <ContactList contacts={visibleContacts} deleteHandle={deleteHandle} />
    </div>
  );
};
