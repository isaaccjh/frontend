import React, { useState } from "react";
import ProductContext from './ProductContext';
import ProductListing from "./ProductListing";

import axios from "axios";

const App = () => {
  const url = "https://tgc-project3-express.onrender.com/api"
  const [products, setProducts] = useState([]);

  const context = {
    getProducts: async () => {
      const response = await axios.get(`${url}/api/lures`);
      return response;
    }
  }

  return (
    <ProductContext.Provider value={context}>
      <React.Fragment>
        <ProductListing />
      </React.Fragment>
    </ProductContext.Provider>
  )
}

export default App;
