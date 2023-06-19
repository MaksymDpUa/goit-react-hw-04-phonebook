import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label htmlFor={inputFilterId} className={css.lableFilter}>Find your contact</label>
          <input
              className={css.inputFilter}
        name="filter"
        value={value}
        onChange={onChange}
        id={inputFilterId}
      ></input>
    </>
  );
};


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
