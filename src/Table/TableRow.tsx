import React from 'react';

type TableRowProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableRowElement>; 


const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <tr className="border-b border-neutral-200 odd:bg-black/[0.02]" {...props}>
      {children}
    </tr>
  );
};

export default TableRow;