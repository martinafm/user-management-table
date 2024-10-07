import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ children, ...props }) => {
  return (
    <tr className="border-b border-neutral-200 odd:bg-black/[0.02]" {...props}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;