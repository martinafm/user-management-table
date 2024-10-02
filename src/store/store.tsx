import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import { UsersState } from './reduxTypes';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export const initialState: UsersState = {
  data: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;