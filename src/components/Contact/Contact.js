import React from 'react';
import s from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={s.contact__container}>
      <p className={s.contact__text}>{contact.name}</p>
      <p className={s.contact__text}>{contact.number}</p>
      <button
        className={s.contact__btn}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
