import React from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LureProvider from "./providers/LureProvider";
import "./index.css"

import Navbar from "./components/Navbar";

//PAGES
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";

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
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;
