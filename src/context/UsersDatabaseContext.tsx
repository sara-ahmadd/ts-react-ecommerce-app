import { ReactElement, createContext, useState } from "react";
import { User } from "./UserContext";
import { useGetUsers } from "../Hooks/useGetUsers";

export type Users = User[];

export interface UserContextType {
  users: User[];
  UpdateUsersDB: (u: User) => void;
}

const InitUsersState: UserContextType = {
  users: [
    {
      email: "",
      password: "",
      cart: [],
    },
  ],
  UpdateUsersDB: <T,>(s: T) => s,
};

export const UsersDatabaseContext = createContext(InitUsersState);

const initUser: User = {
  email: "",
  password: "",
  cart: [],
};

export const UsersDatabaseContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [users, setUsers] = useState([initUser]);
  //get all users from local storage
  const data = useGetUsers();

  const UpdateUsersDB = (user: User) => {
    //add a condition to prevent the addition of the intial user to the users database
    if (users.every((x) => x.email !== "" && x.password !== "")) {
      setUsers([...users, user]);
    } else {
      setUsers([...data, user]);
    }
  };

  return (
    <UsersDatabaseContext.Provider value={{ users, UpdateUsersDB }}>
      {children}
    </UsersDatabaseContext.Provider>
  );
};
