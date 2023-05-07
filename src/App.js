import React, { useState } from "react";
import ProductContext from './ProductContext';
import ProductListing from "./ProductListing";

import axios from "axios";

const App = () => {
  const url = "https://tgc-project3-express.onrender.com/api"
  const [products, setProducts] = useState([]);

  const context = {
    getProducts: async () => {
      const response = await axios.get(`${url}/lures`);
      console.log(response.data)
      return response.data;
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
