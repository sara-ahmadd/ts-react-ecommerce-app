import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 max-w-sm cursor-pointer">
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/cart")}>Cart</button>
    </div>
  );
};

export default Options;
