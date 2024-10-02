import React from 'react';
import PropTypes from 'prop-types';

export default function TableHeader({ children }) {
  return (
    <th
      scope="col"
      className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4"
    >
      {children}
    </th>
  );
}

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};