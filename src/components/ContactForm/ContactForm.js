import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const [contact, setContact] = useState({ name: '', number: '' });

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name)) {
      return Notify.info(`${contact.name} is already in contacts`, {
        timeout: 11000,
      });
    }

    dispatch(contactsOperations.addContact(contact));
    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form__field}>
        <label className={s.form__label} htmlFor="name">
          Name
        </label>
        <input
          className={s.form__input}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={handleChange}
        />
      </div>
      <div className={s.form__field}>
        <label className={s.form__label} htmlFor="number">
          Number
        </label>
        <input
          className={s.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          value={contact.number}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={s.form__btn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
