import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import './SearchInput.css';

const SearchInput = ({ value, inputHandler }) => {
  return (
    <div className="input">
      <Input value={value} onChange={inputHandler} placeholder="Type to search..." />
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
