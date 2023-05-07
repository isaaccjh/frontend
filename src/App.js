import React, { useState } from "react";
import ProductListing from "./ProductListing";

import LureProvider from "./providers/LureProvider";
import "./index.css"


const App = () => {
  // const url = "https://tgc-project3-express.onrender.com/api"
  // const [products, setProducts] = useState([]);

  // const context = {
  //   getProducts: async () => {
  //     const response = await axios.get(`${url}/lures`);
  //     console.log(response.data)
  //     return response.data;
  //   }
  // }

  return (
    <LureProvider>
      <React.Fragment>
        <ProductListing />
      </React.Fragment>
    </LureProvider>
  )
}

export default App;
