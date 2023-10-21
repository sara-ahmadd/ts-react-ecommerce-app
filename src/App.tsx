import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/cart/Cart";
import { CategoryContextProvider } from "./context/CategoryContext";
import { useContext } from "react";
import Navbar from "./pages/Home/Navbar";
import { ModalContext, ModalContextProvider } from "./context/ModalContext";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { UsersDatabaseContextProvider } from "./context/UsersDatabaseContext";
import SignUp from "./pages/Login/SignUp";
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";
import { RefreshContextProvider } from "./pages/cart/RefreshContext";

function App() {
  const { modal } = useContext(ModalContext);
  return (
    <CategoryContextProvider>
      <ModalContextProvider>
        <UserContextProvider>
          <UsersDatabaseContextProvider>
            <CartContextProvider>
              <RefreshContextProvider>
                <>
                  {modal === false && <Navbar />}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="cart" element={<Cart />} />
                    <Route
                      path="productDetails/:id"
                      element={
                        <>
                          <Home />
                          <ProductDetails />
                        </>
                      }
                    />
                  </Routes>
                  {modal === false && <Footer />}
                </>
              </RefreshContextProvider>
            </CartContextProvider>
          </UsersDatabaseContextProvider>
        </UserContextProvider>
      </ModalContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
