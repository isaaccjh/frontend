import React, { useState } from "react";
import "./index.css"

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PROVIDERS
import LureProvider from "./providers/LureProvider";
import UserProvider from "./providers/UserProvider";

// COMPONENTS
import Navbar from "./components/Navbar";

//PAGES
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <React.Fragment>
      <Router>
        <Navbar/>
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
          <Route path="/login" element={
            <UserProvider>
              <Login />
            </UserProvider>}
          />
          <Route path="/profile" element={
            <UserProvider>
              <Profile />
            </UserProvider>}
          />
          <Route path="/logout" element={
            <UserProvider>
              <Logout />
            </UserProvider>}
          />

        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;


