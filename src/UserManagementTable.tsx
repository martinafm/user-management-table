import React from 'react';
import Users from './Users';
import Header from './Header';

export default function UserManagementTable() {
  return (
    <div className="mx-4 flex max-w-screen-xl flex-col items-center justify-center xl:mx-auto">
      <Header />
      <Users />
    </div>
  );
}