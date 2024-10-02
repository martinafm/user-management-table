import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers } from './store/usersSlice';
import UserTable from './Table/UserTable';
import getFilteredUsers from './getFilteredUsers';

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getFilteredUsers);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  


  const filteredUsersBySearchTerm = searchTerm.length >= 3
    ? users.filter((user) =>
        ['name', 'username', 'email', 'phone'].some((key) => {
          const value = user[key as keyof typeof user];
          return (
            value && String(value).toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      )
    : users;


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value.length > 3) {
      setSearchTerm(e.target.value)
    } else {
      setSearchTerm(e.target.value)
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
          value={searchTerm}
          className="block w-full rounded-lg px-4 py-2 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-50 md:w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mx-4 mb-8 w-full overflow-x-auto">
        <UserTable filteredUsers={filteredUsersBySearchTerm} />
      </div>
    </>
  );
}
