import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/cart/Cart";
import { CategoryContext } from "./context/CategoryContext";
import { useEffect, useState } from "react";
import Navbar from "./pages/Home/Navbar";
import { ModalContext } from "./context/ModalContext";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
// import { UserContext } from "./context/UserContext";
import { UsersDatabaseContext } from "./context/UsersDatabaseContext";
import SignUp from "./pages/Login/SignUp";
// import { useUserReducerHook } from "./Hooks/useUserReducerHook";
import { UserContext } from "./context/UserContext";
import { initUserState } from "./ReducerFunctions/userReducer";
// import { usersDatabase } from "./helper/usersDataBase";

function App() {
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([initUserState]);
  // const { user, setUser } = useUserReducerHook({ email: "", password: "" });

  const [user, setUser] = useState(initUserState);

  
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <ModalContext.Provider value={{ modal, setModal }}>
        <UserContext.Provider value={{ user, setUser }}>
          <UsersDatabaseContext.Provider value={{ users, setUsers }}>
            {modal === false && <Navbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="cart" element={<Cart />} />
              <Route path="productDetails/:id" element={<ProductDetails />} />
            </Routes>
            {modal === false && <Footer />}
          </UsersDatabaseContext.Provider>
        </UserContext.Provider>
      </ModalContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
