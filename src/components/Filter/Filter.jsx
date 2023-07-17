import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filtersSlice';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => dispatch(filterContact(e.target.value));

  return (
    <div className={css.filter}>
      <h3>Find contact by name</h3>
      <input
        className={css.filter__input}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
