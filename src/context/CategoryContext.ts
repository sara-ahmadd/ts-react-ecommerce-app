import { Dispatch, SetStateAction, createContext } from "react";
export type ValueType = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};
const initContextState: ValueType = {
  category: "",
  setCategory: <A>(s: A) => s,
};

export const CategoryContext = createContext(initContextState);
