import { ReactElement, createContext, useContext, useState } from "react";
import { Product } from "../Hooks/useProducts";
import { useGetUser } from "../Hooks/useGetUser";
import { UserContext } from "./UserContext";

export type CartType = Product[];

export type CartContextType = {
  cart: Product[];
  updateCart: (c: CartType) => void;
};
const initCartContext: CartContextType = {
  cart: [],
  updateCart: (c: CartType) => c,
};

export const CartContext = createContext(initCartContext);

export const CartContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const { user } = useContext(UserContext);
  const currUser = useGetUser(user.email, user.password);

  const [cart, setCart] = useState(
    currUser?.cart ?? [
      {
        id: "",
        title: "",
        image: "",
        price: 0,
        rating: { rate: 0, count: 0 },
      },
    ]
  );
  const updateCart = (c: CartType) => {
    setCart(c);
  };
  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
