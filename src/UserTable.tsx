import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { User } from './types';

type UserTableProps = {
    filteredUsers: User[]
}
export default function UserTable({ filteredUsers } : UserTableProps) {
  return (
    <table cellPadding="10" className="min-w-full text-left text-sm font-light">
      <thead className="border-b border-neutral-200 bg-white font-medium">
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Username</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Phone</TableHeader>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length ? (
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
  );
}
