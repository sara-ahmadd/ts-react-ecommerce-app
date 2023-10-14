import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Logo</button>;
};

export default Logo;
