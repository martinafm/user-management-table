import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers } from './store/usersSlice';
import UserTable from './Table/UserTable';
import getFilteredUsers from './getFilteredUsers';
import { User } from './types';

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getFilteredUsers);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const columnNames = ['name', 'username', 'email', 'phone'];

  const compareSearchTermWithTableValues = (value: string | number) =>
    value.toString().toLowerCase().includes(searchTerm.toLowerCase());

  const isSearchTermIncludedInColumnName = (user: User) => {
    return columnNames.some((columnName) => {
      const value = user[columnName];
      return value && compareSearchTermWithTableValues(value);
    });
  };

  const filteredUsersBySearchTerm: User[] = users.filter((user) =>
    isSearchTermIncludedInColumnName(user)
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 3 || searchTerm) {
      setSearchTerm(e.target.value);
    }
  }

  return (
    <>
      <div className="mx-4 mb-5 w-full">
        <label className="mb-2 block text-base font-medium">
          Search filter:
        </label>
        <input
          type="text"
          className="block w-full rounded-lg px-4 py-2 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50 md:w-1/2"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="mx-4 mb-8 w-full overflow-x-auto">
        <UserTable filteredUsers={filteredUsersBySearchTerm} />
      </div>
    </>
  );
};
export default Users;
