import { User } from '../types';

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await response.json()) as User[];
};

export default getUsers;