import React from 'react';

type TableHeaderProps = {
  children: React.ReactNode;
}


const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <th scope="col" className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4">
      {children}
    </th>
  );
};

export default TableHeader;