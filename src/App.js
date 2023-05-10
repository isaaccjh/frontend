import React from "react";
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

const App = () => {

  return (
    <React.Fragment>
      <Router>
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
              <Route path="/login/" element={
                <UserProvider>
                  <Login />
                </UserProvider>} 
              />
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;
