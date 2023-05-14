import React, { useContext, useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
import { useLocation } from "react-router-dom";
import LureContext from "../contexts/LureContext";
import "../index.css";

import SearchBar from "../components/SearchBar";

import ProductCard from "../components/ProductCard";

export default function ProductListing() {
    let context = useContext(LureContext);
    const [lures, setLures] = useState([]);
    const [variants, setVariants] = useState([]);
    const [scope, animate] = useAnimate();
    const [display, setDisplay] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        const getProducts = async () => {
            const allLures = await context.getAllLures();
            let filteredLures = allLures;
            const lureFilter = location?.state?.filterState?.lure
            if (lureFilter !== 0 && lureFilter !== undefined) {
                const regex = new RegExp(location.state.filterState.lure, "i");
                filteredLures = allLures.filter(lure => regex.test(lure.name));
            }
            setLures(allLures);
            setDisplay(filteredLures);
        }
        getProducts();
    }, [context, location])

    useEffect(() => {
        async function getVariants() {
            const allVariants = await context.getAllVariants();
            setVariants(allVariants);
        }
        getVariants();
    }, [context]);

    return (
        <React.Fragment>
            <div className="px-5">
                {/* <SearchBar /> */}
                <div>
                    <ul className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {display.map(p => (
                            <li>
                                <ProductCard
                                    product={p}
                                    variants={variants.filter(v => v.lure_id === p.id)}
                                    lures={display}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>

    )
}