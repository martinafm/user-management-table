import React from 'react';

type TableDataProps = {
  children: React.ReactNode;
}

const TableData = ({ children }: TableDataProps ) => {
  return (
    <td
      className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4"
    >
      {children}
    </td>
  );
};

export default TableData;