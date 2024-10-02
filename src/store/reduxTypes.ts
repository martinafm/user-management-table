import { User } from "../types";

export interface UsersState {
    data: User[];
    filters: {
      name: string;
      username: string;
      email: string;
      phone: string;
    };
  }