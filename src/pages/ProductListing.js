import React, { useContext, useState, useEffect } from "react";
import LureContext from "../contexts/LureContext";
import "../index.css";

import ProductCard from "../components/ProductCard";

export default function ProductListing() {
    let context = useContext(LureContext);
    const [lures, setLures] = useState([]);
    const [variants, setVariants] = useState([])


    useEffect(() => {
        async function getProducts() {
            const allLures = await context.getAllLures();
            setLures(allLures);
        }
        getProducts(); 
    }, [context]);

    useEffect(() => {
        async function getVariants() {
            const allVariants = await context.getAllVariants();
            setVariants(allVariants);
        }
        getVariants();
    }, [context])

    return (
        <React.Fragment>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {lures.map(p => (
                   <li> 
                    <ProductCard 
                            product={p} 
                            variants={variants.filter(v => v.lure_id === p.id)}
                            lures={lures}
                    /> 
                   </li>
                ))}
            </ul>
        </React.Fragment>
    )
}