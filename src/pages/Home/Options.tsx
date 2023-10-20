import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useGetUser } from "../../Hooks/useGetUser";
import { Product } from "../../Hooks/useProducts";
import { LuShoppingBasket } from "react-icons/lu";

const Options = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);
  const { cart, updateCart } = useContext(CartContext);

  const currUser = useGetUser(user.email, user.password);

  useEffect(() => {
    updateCart(currUser?.cart ?? []);
  }, [user]);

  const getTotalProductsCount = (c: Product[]) => {
    let sum = 0;
    c.forEach((x) => {
      if (x.amount) {
        sum += x.amount ?? 0;
      }
    });
    return sum;
  };
  const totalCount = getTotalProductsCount(cart ?? []);

  const userLogout = () => {
    updateUser({ email: "", password: "", cart: [] });
    updateCart([]);
  };

  return (
    <div className="flex gap-4 max-w-sm cursor-pointer ">
      <button
        onClick={() => navigate("/login")}
        className=" text-lg font-semibold"
      >
        {user && user.email ? `Hi, ${user.email.split("@")[0]}` : "Login"}
      </button>
      <>
        {user && user.email ? (
          <button onClick={userLogout} className=" text-lg font-semibold">
            Logout
          </button>
        ) : null}
      </>
      <button
        onClick={() => navigate("/signUp")}
        className=" text-lg font-semibold"
      >
        {user && user.email ? "" : "Sign Up"}
      </button>
      <button
        onClick={() => navigate("/cart")}
        className=" text-lg font-semibold relative p-0"
      >
        <LuShoppingBasket className=" w-8 h-8 p-0 object-cover text-sky-500 cart_icon" />
        <span className="absolute -top-5 -right-3 bg-red-600 p-1 rounded-full text-white w-7 h-7 flex justify-center items-center">
          {" "}
          {totalCount ?? 0}
        </span>
      </button>
    </div>
  );
};

export default Options;
