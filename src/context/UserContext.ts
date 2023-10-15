import { createContext } from "react";
import { Product } from "../Hooks/useProductDetails";

export type User = {
  id?: string;
  email: string;
  password: string;
  cart?: Product[];
};

export interface UserContextType {
  user: User;
  setUser: (state: User) => void;
}

const InitUser: UserContextType = {
  user: {
    email: "",
    password: "",
    cart: [],
  },
  setUser: (user) => user,
};

export const UserContext = createContext(InitUser);
