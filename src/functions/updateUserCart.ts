import Swal from "sweetalert2";
import { User } from "../context/UserContext";
import { Product } from "../Hooks/useProducts";
import { UsersContextType } from "../context/UsersDatabaseContext";

export const updateUserCart = (
  user: User,
  currentU: User,
  pr: Product,
  update_user: UsersContextType["UpdateUsersDB"],
  update_DB: UsersContextType["UpdateUsersDB"]
) => {
  //get the saved cart of the current user from local storage
  const getSavedCart = (u: User) => {
    return u.cart ?? [];
  };
  const checkProduct = (p: Product, arr: Product[]) => {
    const prod = arr.find((x) => x.id === p.id);
    return prod ? prod : null;
  };

  if (user.email && user.password) {
    if (user.cart !== undefined) {
      //get the cart of the current user, then check if the clicked product is already in the cart.
      let retreivedCart: Product[] = getSavedCart(currentU);
      const checkedProduct = checkProduct(pr, retreivedCart);
      //if the product is found in the cart
      if (checkProduct !== null) {
        //delete the product from the cart, then update the amount in the found product
        retreivedCart = retreivedCart.filter((x) => x.id !== pr.id);
        const quantity = checkedProduct?.amount ?? 0;

        //add the updated product to the cart
        const updatedCart = [...retreivedCart, { ...pr, amount: quantity + 1 }];
        const updatedUser = { ...user, cart: updatedCart };
        update_user(updatedUser);
        update_DB(updatedUser);
      } else {
        const updatedCart = [...retreivedCart, { ...pr, amount: 1 }];
        const updatedUser = { ...user, cart: updatedCart };
        update_user(updatedUser);
        update_DB(updatedUser);
      }
    }
  } else {
    Swal.fire({
      title: "Opps!",
      text: "Please login or signup to be able to shop now :)",
      icon: "info",
      confirmButtonText: "Ok",
    });
  }
};
