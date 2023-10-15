import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button className="pl-2" onClick={() => navigate("/")}>
      Logo
    </button>
  );
};

export default Logo;
