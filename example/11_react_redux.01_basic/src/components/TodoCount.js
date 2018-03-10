import React from 'react';
import PropTypes from 'prop-types';

const TodoCount = ({ count, onClear }) => (
  <div>
    <span>Count:{count}</span>
    <button onClick={onClear}>Clear</button>
  </div>
);

TodoCount.propTypes = {
  count: PropTypes.number.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default TodoCount;
