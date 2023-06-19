import { nanoid } from 'nanoid';
import { Component } from 'react';

import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputTelId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    
    if (this.props.isInList(name)) {
      alert(`${name} is already in your contacts`);
      return;
    }

    const id = nanoid();
    this.props.addContact([{ name, id, number: Number(number) }]);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputNameId} className={css.inputLable}>
          Name
        </label>
        <input
          id={this.inputNameId}
          className={css.inputField}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <label htmlFor={this.inputTelId} className={css.inputLable}>
          Number
        </label>
        <input
          id={this.inputTelId}
          type="tel"
          className={css.inputField}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
