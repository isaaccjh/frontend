import React, { useContext, useState, useEffect } from "react";
import ProductContext from "./ProductContext"; 

export default function ProductListing() {
    let context = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const allProducts = await context.getProducts();
            setProducts(allProducts);
        }

        getProducts();
    }, [context])

    return (
        <React.Fragment>
            <ul>
                {products.map(p => (
                    <li>{p.name}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}