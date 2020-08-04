import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ value, inputHandler }) => {
  return (
    <div>
      <input type="text" value={value} onChange={inputHandler} />
    </div>
  );
};

SearchInput.defaultProps = {
  value: '',
  inputHandler: () => {},
};

SearchInput.propTypes = {
  value: PropTypes.string,
  inputHandler: PropTypes.func,
};

export default SearchInput;
