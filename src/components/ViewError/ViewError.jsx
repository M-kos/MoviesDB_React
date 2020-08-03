import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const ViewError = ({ message }) => {
  return (
    <>
      <Alert message={message} type="error" />
    </>
  );
};

ViewError.defaultProps = {
  message: '',
};

ViewError.propTypes = {
  message: PropTypes.string,
};

export default ViewError;
