import React, { useContext, useState, useEffect } from "react";
import LureContext from "./contexts/LureContext";
import "./index.css"

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
                    <li className="text-3xl text-red-400">{p.name}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}