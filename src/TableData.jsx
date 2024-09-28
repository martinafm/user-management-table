import React from 'react';
import PropTypes from 'prop-types';

export default function TableData({ children, ...props }) {
  return (
    <td className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4" {...props}>
      {children}
    </td>
  );
}

TableData.propTypes = {
  children: PropTypes.node.isRequired,
};