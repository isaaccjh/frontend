import React, { useContext, useState, useEffect } from "react";
import { filterProps, useAnimate } from "framer-motion";
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
                filteredLures = filteredLures.filter(lure => regex.test(lure.name));
            }

            const maxPriceFilter = parseInt(location?.state?.filterState?.max_price) * 100;
            if (maxPriceFilter && maxPriceFilter !== 0 && typeof maxPriceFilter === "number" && maxPriceFilter !== undefined) {
                const variantsLowerThanMaxPrice = variants?.filter(variant => variant.cost <= maxPriceFilter);
                console.log(variantsLowerThanMaxPrice)
                filteredLures = filteredLures.filter(lure => variantsLowerThanMaxPrice.find(variant => variant.lure_id === lure.id))
                console.log(filteredLures)
            }
            const minPriceFilter = parseInt(location?.state?.filterState?.min_price) * 100;
            if (minPriceFilter && minPriceFilter !== 0 && typeof minPriceFilter === "number" && minPriceFilter !== undefined) {
                const variantsLowerThanMinPrice = variants?.filter(variant => variant.cost >= minPriceFilter);
                filteredLures = filteredLures.filter(lure => variantsLowerThanMinPrice.some(variant => variant.lure_id === lure.id))
            }
            const minVariantFilter = parseInt(location?.state?.filterState?.min_variants)
            if (minVariantFilter && minVariantFilter !== 0 && typeof minVariantFilter === "number" && minVariantFilter !== undefined) {
                const lureIdCounter = {};
                variants.forEach(variant => {
                    lureIdCounter[variant.lure_id] = (lureIdCounter[variant.lure_id] || 0) + 1;
                });
                for (let id in lureIdCounter) {
                    if (lureIdCounter[id] < minVariantFilter) {
                        filteredLures = filteredLures.filter(lure => parseInt(id) !== lure.id)
                    }
                };
            }
            const maxVariantFilter = parseInt(location?.state?.filterState?.max_variants)
            if (maxVariantFilter && maxVariantFilter !== 0 && typeof maxVariantFilter === "number" && maxVariantFilter !== undefined) {
                const lureIdCounter = {};
                variants.forEach(variant => {
                    lureIdCounter[variant.lure_id] = (lureIdCounter[variant.lure_id] || 0) + 1;
                });
                for (let id in lureIdCounter) {
                    if (lureIdCounter[id] > maxVariantFilter) {
                        filteredLures = filteredLures.filter(lure => parseInt(id) !== lure.id)
                    }
                };
            }
            setLures(allLures);
            setDisplay(filteredLures);
        }
        getProducts();
    }, [context, location, variants])

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