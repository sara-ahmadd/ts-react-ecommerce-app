import { CartContextType } from "../context/CartContext";
import { User } from "../context/UserContext";
import { UsersContextType } from "../context/UsersDatabaseContext";
import { removeItem } from "./removeItemFromCart";

//this function increase or decrease amount of pieces that are already in the cart we cannot use it inside details component because the item there might be not found in the cart.
const handlePiecesQuantity = (
  title: string,
  sign: string,
  u: User,
  updateCart: CartContextType["updateCart"],
  updateDB: UsersContextType["UpdateUsersDB"]
) => {
  const item = u?.cart?.find((x) => x.title === title);
  const index = u.cart?.indexOf(item ?? {}) || 0;
  const cartCopy = u.cart?.slice() || [];

  let newItem;

  if (sign === "+") {
    newItem = { ...item, amount: (item?.amount || 0) + 1 };
    if (index !== -1) {
      cartCopy[index] = newItem;
      const updatedUser = { ...u, cart: cartCopy };
      updateCart([...cartCopy]);
      updateDB(updatedUser);
    }
  } else if (sign === "-") {
    if ((item?.amount || 0) - 1 > 0) {
      newItem = {
        ...item,
        amount: (item?.amount || 0) - 1,
      };
      if (index !== -1) {
        cartCopy[index] = newItem;
        const updatedUser = { ...u, cart: cartCopy };
        updateCart([...cartCopy]);
        updateDB(updatedUser);
      }
    } else {
      removeItem(title, u, updateCart, updateDB);
    }
  }
};
export default handlePiecesQuantity;
