import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

const Options = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);
  const { updateCart } = useContext(CartContext);
  const userLogout = () => {
    updateUser({ email: "", password: "", cart: [] });
    updateCart([]);
  };
  return (
    <div className="flex gap-4 max-w-sm cursor-pointer">
      <button onClick={() => navigate("/login")}>
        {user && user.email ? `Hi, ${user.email.split("@")[0]}` : "Login"}
      </button>
      <>
        {user && user.email ? (
          <button onClick={userLogout}>Logout</button>
        ) : null}
      </>
      <button onClick={() => navigate("/signUp")}>
        {user && user.email ? "" : "Sign Up"}
      </button>
      <button onClick={() => navigate("/cart")}>Cart</button>
    </div>
  );
};

export default Options;
