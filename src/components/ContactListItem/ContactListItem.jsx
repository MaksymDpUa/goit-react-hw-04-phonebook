import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, contactId, deleteHandle }) => {
  return (
    <li>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{name}</span>: {number}
      </p>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => deleteHandle(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteHandle: PropTypes.func,
  number: PropTypes.number,
  name: PropTypes.string,
  contactId: PropTypes.string,
};
