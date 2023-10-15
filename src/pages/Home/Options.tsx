import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Options = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <div className="flex gap-4 max-w-sm cursor-pointer">
      <button onClick={() => navigate("/login")}>
        {user.email ? `Hi, ${user.email.split("@")[0]}` : "Login"}
      </button>
      <button onClick={() => navigate("/signUp")}>
        {user.email ? "" : "Sign Up"}
      </button>
      <button onClick={() => navigate("/cart")}>Cart</button>
    </div>
  );
};

export default Options;
