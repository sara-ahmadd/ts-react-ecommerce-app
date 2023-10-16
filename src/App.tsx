import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/cart/Cart";
import { CategoryContext } from "./context/CategoryContext";
import {  useState } from "react";
import Navbar from "./pages/Home/Navbar";
import { ModalContext } from "./context/ModalContext";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { UsersDatabaseContextProvider } from "./context/UsersDatabaseContext";
import SignUp from "./pages/Login/SignUp";
import {  UserContextProvider } from "./context/UserContext";

function App() {
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false);
 

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <ModalContext.Provider value={{ modal, setModal }}>
        <UserContextProvider>
          <UsersDatabaseContextProvider>
            <>
              {modal === false && <Navbar />}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="cart" element={<Cart />} />
                <Route path="productDetails/:id" element={<ProductDetails />} />
              </Routes>
              {modal === false && <Footer />}
            </>
          </UsersDatabaseContextProvider>
        </UserContextProvider>
      </ModalContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
