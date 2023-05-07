import React, { useContext, useState, useEffect } from "react";
import LureContext from "./contexts/LureContext";
import "./index.css";

import ProductCard from "./components/ProductCard";

export default function ProductListing() {
    let context = useContext(LureContext);
    const [lures, setLures] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const allLures = await context.getAllLures();
            setLures(allLures);
        }

        getProducts();
    }, [context])

    return (
        <React.Fragment>
            <ul>
                {lures.map(p => (
                    <ProductCard product={p}/>
                ))}
            </ul>
        </React.Fragment>
    )
}