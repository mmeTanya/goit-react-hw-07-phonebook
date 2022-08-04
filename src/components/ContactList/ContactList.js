import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Contact from '../Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));


  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {contacts.length > 0 && (
        <ul className={s.contact__list}>
          {contacts.map(contact => (
            <li key={contact.id} className={s.contact__item}>
              <Contact
                contact={contact}
                onDeleteContact={() => onDeleteContact(contact.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
