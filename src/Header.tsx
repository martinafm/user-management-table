import React from 'react';
import Arrow from '../assets/arrow.svg';

const Header: React.FC = () => {
  return (
    <header className="mx-4 my-8 flex w-full flex-col items-center justify-center font-header sm:my-16">
      <a
        href="https://github.com/martinafm"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center self-start rounded-lg bg-gray-200 px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <img src={Arrow} width="20" height="20" className="mr-2" alt="Arrow"/>
        Go back to my GitHub
      </a>
      <h1 className="my-5 text-2xl font-medium sm:my-10 sm:text-5xl">
        User Management Table
      </h1>
      <p className="text-sm sm:text-base">
        Table below contains users fetched from
        <a
          href="https://jsonplaceholder.typicode.com"
          className="text-slate-700 hover:text-slate-500"
        >
          <code> {'{JSON}'} Placeholder.</code>
        </a>
      </p>
      <p className="mt-2">Search and filter users.</p>
    </header>
  );
};

export default Header;
