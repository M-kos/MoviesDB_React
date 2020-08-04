import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

import './PaginationComponent.css';

const PaginationComponent = ({ onChange, total }) => {
  return (
    <div className="pagination">
      <Pagination
        defaultPageSize={20}
        hideOnSinglePage
        showSizeChanger={false}
        responsive
        defaultCurrent={1}
        total={total}
        onChange={onChange}
      />
    </div>
  );
};

PaginationComponent.defaultProps = {
  onChange: () => {},
  total: 0,
};

PaginationComponent.propTypes = {
  onChange: PropTypes.func,
  total: PropTypes.number,
};

export default PaginationComponent;
