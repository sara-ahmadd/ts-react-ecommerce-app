import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/cart/Cart";
import { CategoryContext } from "./context/CategoryContext";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CategoryContext.Provider>
  );
}

export default App;
