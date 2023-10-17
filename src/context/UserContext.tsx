import { ReactElement, createContext, useState } from "react";
import { Product } from "./../Hooks/useProducts";
// import { UsersDatabaseContext } from "./UsersDatabaseContext";

export type User = {
  id?: string;
  email: string;
  password: string;
  cart?: Product[];
};

export interface UserContextType {
  user: User;
  updateUser: (state: User) => void;
}

const InitUser: UserContextType = {
  user: {
    email: "",
    password: "",
    cart: [],
  },
  updateUser: <T,>(u: T) => u,
};

export const UserContext = createContext(InitUser);

export const UserContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const initUser: User = {
    email: "",
    password: "",
    cart: [],
  };

  const [user, setUser] = useState(initUser);

  // const { users } = useContext(UsersDatabaseContext);

  const updateUser = (u: User) => {
    setUser(u);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
