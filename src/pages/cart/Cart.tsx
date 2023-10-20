import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { useGetUser } from "../../Hooks/useGetUser";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import placImg from "/place-img.svg";
import { UsersDatabaseContext } from "../../context/UsersDatabaseContext";

const Cart = () => {
  const { user } = useContext(UserContext);
  const { cart, updateCart } = useContext(CartContext);
  const { UpdateUsersDB } = useContext(UsersDatabaseContext);
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

  const managePieces = (title: string, sign: string) => {
    const item = currUser?.cart?.find((x) => x.title === title);
    let newItem;
    if (sign === "+") {
      newItem = { ...item, amount: (item?.amount || 0) + 1 };
    } else {
      newItem = {
        ...item,
        amount: (item?.amount || 0) - 1 > 0 ? (item?.amount || 0) - 1 : 1,
      };
    }
    const index = currUser.cart?.indexOf(item ?? {}) || 0;
    const cartCopy = currUser.cart?.slice() || [];
    if (index !== -1) {
      cartCopy[index] = newItem;
      const updatedUser = { ...currUser, cart: cartCopy };
      updateCart(cartCopy);
      UpdateUsersDB(updatedUser);
    }
  };
  const removeItem = (title: string) => {
    const newCart = currUser.cart?.filter((x) => x.title !== title) || [];
    const updatedUser = { ...currUser, cart: newCart };
    updateCart(newCart);
    UpdateUsersDB(updatedUser);
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
                          onClick={() => managePieces(x.title ?? "", "+")}
                        >
                          +
                        </button>
                        {x.amount}
                        <button
                          className="w-7 h-7 btn text-white"
                          onClick={() => managePieces(x.title ?? "", "-")}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>{x.price}</td>
                    <td>
                      <Button
                        action={() => removeItem(x.title || "")}
                        text="Remove"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr className="border-2 border-sky-500 p-0 font-bold text-lg">
                <td colSpan={3}>
                  <h2 className="p-0">
                    <span className="p-0">Total Cost : $</span>
                    <span className="text-md font-medium p-0">
                      {getTotalCost()}
                    </span>
                  </h2>
                </td>
                <td colSpan={2}>
                  <h2 className="p-0">
                    <span className="p-0">Quantity : </span>
                    <span className="text-md font-medium p-0">
                      {getTotalPieces()}
                    </span>
                  </h2>
                </td>
              </tr>
            </tfoot>
          </table>
          <Button
            text="Clear Cart"
            action={() => {
              updateCart([]);
              UpdateUsersDB({ ...currUser, cart: [] });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
