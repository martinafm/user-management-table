import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store.tsx';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  data: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  data: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await response.json()) as User[];
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof UsersState['filters']; value: string }>
    ) => {
      state.filters[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.data = action.payload;
      }
    );
  },
});

export const { setFilter } = usersSlice.actions;

export const selectFilteredUsers = (state: RootState) => {
  const { name, username, email, phone } = state.users.filters;
  return state.users.data.filter(
    (user) =>
      user.name.toLowerCase().includes(name.toLowerCase()) &&
      user.username.toLowerCase().includes(username.toLowerCase()) &&
      user.email.toLowerCase().includes(email.toLowerCase()) &&
      user.phone.includes(phone)
  );
};

export default usersSlice.reducer;
