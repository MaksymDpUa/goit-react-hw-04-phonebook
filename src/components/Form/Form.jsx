import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import css from './Form.module.css';

export const Form = ({ isInList, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameId = nanoid();
  const inputTelId = nanoid();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Something wrong');
    }
  };

  const handleSubmit = e => {
    
    e.preventDefault();

    if (isInList(name)) {
      alert(`${name} is already in your contacts`);
      return;
    }

    const id = nanoid();
    addContact([{ name, id, number: Number(number) }]);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId} className={css.inputLable}>
        Name
      </label>
      <input
        id={inputNameId}
        className={css.inputField}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        value={name}
      />
      <label htmlFor={inputTelId} className={css.inputLable}>
        Number
      </label>
      <input
        id={inputTelId}
        type="tel"
        className={css.inputField}
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};


Form.propTypes = {
  addContact: PropTypes.func,
  isInList: PropTypes.func,
}