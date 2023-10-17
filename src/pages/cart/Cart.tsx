import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { useGetUser } from "../../Hooks/useGetUser";

const Cart = () => {
  const { user } = useContext(UserContext);
  const { cart, updateCart } = useContext(CartContext);
  const currUser = useGetUser(user.email, user.password);

  useEffect(() => {
    if (user.email && user.password) {
      updateCart(currUser.cart ?? []);
    }
  }, [user]);

  return (
    <div>
      {cart?.length > 0 ? (
        cart.map((x, index) => (
          <>
            <h1 key={`${index}-${x.id}`}>{x.title}</h1>
            <h2>Quantity : {x.amount}</h2>
            <hr />
          </>
        ))
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
