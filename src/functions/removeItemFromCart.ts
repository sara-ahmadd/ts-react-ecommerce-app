import { CartContextType } from "../context/CartContext";
import { User } from "../context/UserContext";
import { UsersContextType } from "../context/UsersDatabaseContext";

export const removeItem = (
  title: string,
  u: User,
  updateCart: CartContextType["updateCart"],
  updateDB: UsersContextType["UpdateUsersDB"]
) => {
  const newCart =
    u.cart?.filter(
      (x) => x.title !== title && x !== null && x.id !== undefined
    ) || [];
  const updatedUser = { ...u, cart: newCart };
  updateCart(newCart);
  updateDB(updatedUser);
};
