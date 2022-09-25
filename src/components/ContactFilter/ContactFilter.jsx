import { FilterContainer, FilterText, FilterInput } from './ContactFilter.styled';
import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => {
  return (
      <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FilterContainer>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;