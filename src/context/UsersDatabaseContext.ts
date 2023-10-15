import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "./UserContext";

export type Users = User[];

export interface UserContextType {
  users: User[];
  setUsers: Dispatch<SetStateAction<Users>>;
}

const InitUsersState: UserContextType = {
  users: [
    {
      email: "",
      password: "",
      cart: [],
    },
  ],
  setUsers: <T>(s: T) => s,
};

export const UsersDatabaseContext = createContext(InitUsersState);
