import React from "react";
import "./index.css"

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PROVIDERS
import LureProvider from "./providers/LureProvider";
import UserProvider from "./providers/UserProvider";
import CartProvider from "./providers/CartProvider";

// COMPONENTS
import Navbar from "./components/Navbar";


//PAGES
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <UserProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/products" element={
                <LureProvider>
                  <ProductListing />
                </LureProvider>}
              />
              <Route path="/products/:lure_id" element={
                <LureProvider>
                  <ProductPage />
                </LureProvider>}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />

              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </Router>
    </React.Fragment>
  )
}

export default App;


