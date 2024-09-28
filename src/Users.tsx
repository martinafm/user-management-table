import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers, selectFilteredUsers } from './usersSlice';
import TableData from './TableData';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    ['name', 'username', 'email', 'phone'].some((key) => {
      const value = user[key as keyof typeof user];
      return (
        value && String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  );

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
        <table
          cellPadding="10"
          className="min-w-full text-left text-sm font-light"
        >
          <thead className="border-b border-neutral-200 bg-white font-medium">
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Username</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Phone</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="border-b border-neutral-200 odd:bg-black/[0.02]"
                >
                  <TableData>{user.name}</TableData>
                  <TableData>{user.username}</TableData>
                  <TableData>{user.email}</TableData>
                  <TableData>{user.phone}</TableData>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
