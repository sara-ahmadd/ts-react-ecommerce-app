import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { useGetUser } from "../../Hooks/useGetUser";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Row from "./Row";
import CartBtns from "./CartBtns";
import TableFooter from "./TableFooter";

const Cart = () => {
  const { user } = useContext(UserContext);
  const { cart, updateCart } = useContext(CartContext);
  const currUser = useGetUser(user.email, user.password);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email && user.password) {
      updateCart(currUser.cart ?? []);
    }
  }, [user]);

  return (
    <div className="pt-20 flex justify-center items-center">
      {(!currUser || cart?.length === 0) ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-gray-800 font-semibold">
            Your cart is empty
          </h1>
          <Button action={() => navigate("/")} text="Home" />
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-3 items-start">
          <table>
            <thead>
              <tr className=" font-bold text-lg">
                <td>Id</td>
                <td>Image</td>
                <td>Title</td>
                <td>Pieces</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {cart?.length > 0 &&
                cart.map(
                  (x, index) =>
                    x.id !== undefined && (
                      <Row key={`${index}-${x.id}`} item={x} />
                    )
                )}
            </tbody>
            <TableFooter />
          </table>
          <CartBtns />
        </div>
      )}
    </div>
  );
};

export default Cart;
