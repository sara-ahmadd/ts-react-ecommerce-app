import { ReactNode, createContext, useState } from "react";
export type ValueType = {
  category: string;
  handleCategory: (s: string) => void;
};
const initContextState: ValueType = {
  category: "",
  handleCategory: (s: string) => s,
};

export const CategoryContext = createContext(initContextState);

export const CategoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [category, setCategory] = useState("");
  const handleCategory = (c: string) => {
    setCategory(c);
  };
  return (
    <CategoryContext.Provider value={{ category, handleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
