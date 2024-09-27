import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers, selectFilteredUsers } from './usersSlice';

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectFilteredUsers);
  // const filters = useAppSelector((state) => state.users.filters);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term

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
          placeholder="John..."
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
              <th
                scope="col"
                className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4"
              >
                Username
              </th>
              <th
                scope="col"
                className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4"
              >
                Email
              </th>
              <th
                scope="col"
                className="w-1/4 px-4 py-2 font-medium sm:px-6 sm:py-4"
              >
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-neutral-200 odd:bg-black/[0.02]"
                >
                  <td className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">
                    {user.name}
                  </td>
                  <td className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">
                    {user.username}
                  </td>
                  <td className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">
                    {user.email}
                  </td>
                  <td className="w-1/4 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">
                    {user.phone}
                  </td>
                </tr>
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
