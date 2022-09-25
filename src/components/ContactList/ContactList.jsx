import {
  List,
  ContactCard,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleleButton }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactCard key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <DeleteBtn type="button" id={id} onClick={onDeleleButton}>
              Delete
            </DeleteBtn>
          </ContactCard>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleButton: PropTypes.func.isRequired,
};

export default ContactList;