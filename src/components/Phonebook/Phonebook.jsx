import { Section } from './Phonebook.styled';
import PropTypes from 'prop-types';

const Phonebook = ({ children }) => {
  return <Section>{children}</Section>;
}

Phonebook.propTypes = {
  children: PropTypes.node,
};

export default Phonebook;