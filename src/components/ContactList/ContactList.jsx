import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteHandle }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.name}
            name={contact.name}
            number={contact.number}
            deleteHandle={deleteHandle}
            contactId={contact.id}
          />
        );
      })}
    </ul>
  );
};


ContactList.propTypes = {
  deleteHandle: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
         id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
}