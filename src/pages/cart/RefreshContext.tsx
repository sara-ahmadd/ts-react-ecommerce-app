import { ReactNode, SetStateAction, createContext, useState } from "react";

export interface refContextType {
  refresh: boolean;
  setRefresh: SetStateAction<boolean>;
}

const refreshContext = {
  refresh: false,
  setRefresh: (r: boolean) => {r},
};

export const RefreshContext = createContext(refreshContext);

export const RefreshContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};
