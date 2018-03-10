import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) =>
  (
    <a
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className={`btn btn-link ${active ? 'active' : ''}`}
    >
      {children}
    </a>
  );
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
