import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <div className="container">
      <h1 className="first-title">Phonebook</h1>
      <ContactForm />
      <h2 className="second-title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
