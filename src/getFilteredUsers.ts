import { RootState } from "./store/store";

const getFilteredUsers = (state: RootState
) => {
  const { name, username, email, phone } = state.users.filters;
  return state.users.data.filter(
    (user) =>
      user.name.toLowerCase().includes(name.toLowerCase()) &&
      user.username.toLowerCase().includes(username.toLowerCase()) &&
      user.email.toLowerCase().includes(email.toLowerCase()) &&
      user.phone.includes(phone)
  );
};

export default getFilteredUsers;