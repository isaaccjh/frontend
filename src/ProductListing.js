import React, { useContext } from "react";
import ProductContext from "./ProductContext"; 

export default function ProductListing() {
    let context = useContext(ProductContext);

    return (
        <React.Fragment>
            <ul>
                {context.getProducts().map(x => console.log(x))}
            </ul>
        </React.Fragment>
    )
}