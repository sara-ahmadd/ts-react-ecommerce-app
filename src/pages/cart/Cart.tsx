import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { useGetUser } from "../../Hooks/useGetUser";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import placImg from "/place-img.svg";

const Cart = () => {
  const { user, updateUser } = useContext(UserContext);
  const { cart, updateCart } = useContext(CartContext);
  const currUser = useGetUser(user.email, user.password);
  const navigate = useNavigate();
  const getTotalPieces = () => {
    let sum = 0;
    cart?.forEach((x) => (sum += x.amount ?? 0));
    return sum;
  };

  const getTotalCost = () => {
    let cost = 0;
    cart?.forEach((x) => (cost += (x.amount || 0) * (x.price || 0)));
    return cost.toFixed(2);
  };
  const increment = (title: string) => {
    const item = cart.find((x) => x.title === title);
    const newCart = cart.filter((x) => x.title !== title);
    const newItem = { ...item, amount: (item?.amount || 0) + 1 };
    updateUser({ ...currUser, cart: [...newCart, newItem] });
    updateCart([...newCart, newItem]);
  };
  const decrement = (title: string) => {
    const item = cart.find((x) => x.title === title);
    const newCart = cart.filter((x) => x.title !== title);
    const newItem = { ...item, amount: (item?.amount || 0) - 1 };
    updateUser({ ...currUser, cart: [...newCart, newItem] });
    updateCart([...newCart, newItem]);
  };

  useEffect(() => {
    if (user.email && user.password) {
      updateCart(currUser.cart ?? []);
    }
  }, [user]);

  return (
    <div className="pt-20 flex justify-center items-center">
      {!currUser ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-gray-800 font-semibold">
            Your cart is empty
          </h1>
          <Button action={() => navigate("/")} text="Home" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start">
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
                cart.map((x, index) => (
                  <tr
                    key={`${index + 1}-${x.id}`}
                    className="p-0 border-b-2 border-sky-500 pb-5"
                  >
                    <td>{x.id}</td>
                    <td className="w-20 h-20 p-0">
                      <img
                        src={x.image}
                        placeholder={placImg}
                        className="w-full h-full p-2 object-contain"
                      />
                      {/* <img src={placImg} className="w-full h-full p-0" /> */}
                    </td>
                    <td>{x.title}</td>
                    <td className=" w-20 p-0">
                      <div className="flex w-full justify-between items-center p-0">
                        <button
                          className="w-7 h-7 btn text-white text-center"
                          onClick={() => increment(x.title ?? "")}
                        >
                          +
                        </button>
                        {x.amount}
                        <button
                          className="w-7 h-7 btn text-white"
                          onClick={() => decrement(x.title ?? "")}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>{x.price}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr className="border-2 border-sky-500 p-0 font-bold text-lg">
                <td colSpan={3}>
                  <h2 className="p-0">
                    Total Cost : $
                    <span className="text-md font-medium">
                      {getTotalCost()}
                    </span>
                  </h2>
                </td>
                <td colSpan={2}>
                  <h2 className="p-0">
                    Quantity :
                    <span className="text-md font-medium">
                      {getTotalPieces()}
                    </span>
                  </h2>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
