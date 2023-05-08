import React from "react";
import ProductListing from "./pages/ProductListing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LureProvider from "./providers/LureProvider";
import "./index.css"

import Navbar from "./components/Navbar";


const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={
                <LureProvider>
                  <ProductListing />
                </LureProvider>} 
              />
          </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;
