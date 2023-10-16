import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useCheckUser } from "../../Hooks/useCheckUser";

const Options = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const checkedUser = useCheckUser(user.id ?? "");

  return (
    <div className="flex gap-4 max-w-sm cursor-pointer">
      <button onClick={() => navigate("/login")}>
        {checkedUser && checkedUser.email
          ? `Hi, ${user.email.split("@")[0]}`
          : "Login"}
      </button>
      <button onClick={() => navigate("/signUp")}>
        {checkedUser && checkedUser.email ? "" : "Sign Up"}
      </button>
      <button onClick={() => navigate("/cart")}>Cart</button>
    </div>
  );
};

export default Options;
