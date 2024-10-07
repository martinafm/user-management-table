import React from 'react';
import Users from './Users';
import Header from './Header';

const UserManagementTable = () => {
  return (
    <div className="mx-4 flex max-w-screen-xl flex-col items-center justify-center xl:mx-auto">
      <Header />
      <Users />
    </div>
  );
};

export default UserManagementTable;