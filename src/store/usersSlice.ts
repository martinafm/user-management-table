import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types.ts';
import { UsersState } from './reduxTypes.ts';
import getUsers from '../api/getUsers.ts';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => await getUsers()
);

const initialState: UsersState = {
  data: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

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

export default usersSlice.reducer;
