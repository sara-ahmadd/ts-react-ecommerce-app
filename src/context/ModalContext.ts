import { createContext } from "react";

type ModalType = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalCont: ModalType = { modal: false, setModal: <A>(s: A) => s };

export const ModalContext = createContext(ModalCont);
