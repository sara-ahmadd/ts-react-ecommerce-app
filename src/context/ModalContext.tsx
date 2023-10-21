import { ReactNode, createContext, useState } from "react";

type ModalType = {
  modal: boolean;
  handleModal: (s: boolean) => void;
};

const ModalCont: ModalType = { modal: false, handleModal: <A,>(s: A) => s };

export const ModalContext = createContext(ModalCont);
export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState(false);
  const handleModal = (val: boolean) => {
    setModal(val);
  };
  return (
    <ModalContext.Provider value={{ modal, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
