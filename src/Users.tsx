import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchUsers, selectFilteredUsers, setFilter } from "./usersSlice";

export default function Users() {
	const dispatch = useAppDispatch();
	const users = useAppSelector(selectFilteredUsers);
	// const filters = useAppSelector((state) => state.users.filters);
	const [searchTerm, setSearchTerm] = useState<string>(""); // State for the search term

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const filteredUsers = users.filter((user) =>
		["name", "username", "email", "phone"].some((key) => {
			const value = user[key as keyof typeof user];
			return (
				value && String(value).toLowerCase().includes(searchTerm.toLowerCase())
			);
		})
	);

	return (
		<>
			<div className="w-full mb-5 mx-4">
				<label className="block mb-2 text-base font-medium">
					Search filter:
				</label>
				<input
					type="text"
					placeholder="John..."
					value={searchTerm}
					className="px-4 py-2 block w-full md:w-1/2 placeholder:text-slate-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-slate-300"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className="w-full overflow-x-auto mx-4 mb-8">
				<table
					cellPadding="10"
					className="min-w-full text-left text-sm font-light">
					<thead className="border-b border-neutral-200 bg-white font-medium">
						<tr>
							<th
								scope="col"
								className="px-4 py-2 sm:px-6 sm:py-4 w-1/4 font-medium">
								Name
							</th>
							<th
								scope="col"
								className="px-4 py-2 sm:px-6 sm:py-4 w-1/4 font-medium">
								Username
							</th>
							<th
								scope="col"
								className="px-4 py-2 sm:px-6 sm:py-4 w-1/4 font-medium">
								Email
							</th>
							<th
								scope="col"
								className="px-4 py-2 sm:px-6 sm:py-4 w-1/4 font-medium">
								Phone
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.length > 0 ? (
							filteredUsers.map((user) => (
								<tr
									key={user.id}
									className="border-b border-neutral-200 odd:bg-black/[0.02]">
									<td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4 w-1/4">
										{user.name}
									</td>
									<td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4 w-1/4">
										{user.username}
									</td>
									<td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4 w-1/4">
										{user.email}
									</td>
									<td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4 w-1/4">
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