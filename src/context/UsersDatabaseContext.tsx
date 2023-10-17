import { ReactElement, createContext, useState } from "react";
import { User } from "./UserContext";
import { useGetUsers } from "../Hooks/useGetUsers";
import { useCheckUser } from "../Hooks/useCheckUser";

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

export const UsersDatabaseContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  //get all users from local storage
  const data = useGetUsers();
  //initialize the users state with the value retreived from the database
  const [users, setUsers] = useState(data);

  // const { updateUser } = useContext(UserContext);

  //add new users to local storage or update an existing user

  const UpdateUsersDB = (user: User) => {
    const checkUser = useCheckUser(user.email, user.password);

    let allUsers = useGetUsers();
    if (checkUser !== null) {
      const { email, password } = checkUser;
      allUsers = allUsers.filter(
        (x) => x.email !== email && x.password !== password
      );

      localStorage.setItem(
        "UsersDatabase",
        JSON.stringify([...allUsers, user])
      );
    } else {
      setUsers([...users, user]);
    }
  };

  return (
    <UsersDatabaseContext.Provider value={{ users, UpdateUsersDB }}>
      {children}
    </UsersDatabaseContext.Provider>
  );
};
