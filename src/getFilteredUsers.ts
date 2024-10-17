import { createSelector } from 'reselect';
import { RootState } from './store/store';

const getUsersData = (state: RootState) => state.users.data;

const getUsersFilters = (state: RootState) => state.users.filters;

const getFilteredUsers = createSelector(
  [getUsersData, getUsersFilters],
  (users, filters) => {
    const { name, username, email, phone } = filters;
    
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.username.toLowerCase().includes(username.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase()) &&
        user.phone.includes(phone)
    );
  }
);

export default getFilteredUsers;