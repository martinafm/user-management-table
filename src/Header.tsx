import React from "react";
import Arrow from "../assets/arrow.svg";

const Header: React.FC = () => {
	return (
		<header className="flex flex-col font-header justify-center items-center my-8 sm:my-16 w-full mx-4">
			<a
				href="https://github.com/martinafm"
				target="_blank"
				className="self-start inline-flex items-center justify-center px-4 py-2 text-base font-medium text-gray-600 rounded-lg bg-gray-200 hover:text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
				<img src={Arrow} width="20" height="20" className="mr-2 " />
				Go back to my GitHub
			</a>
			<h1 className="text-2xl sm:text-5xl font-medium my-5 sm:my-10">
				User Management Table
			</h1>
			<p className="text-sm sm:text-base ">
				Table below contains users fetched from
				<a
					href="https://jsonplaceholder.typicode.com"
					className="text-slate-700 hover:text-slate-500">
					<code> {"{JSON}"} Placeholder.</code>
				</a>
			</p>
			<p className="mt-2">Search and filter users.</p>
		</header>
	);
};

export default Header;