import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import LureContext from "../contexts/LureContext";

export default function ProductPage() {
    const { lure_id } = useParams();
    const [lure, setLure] = useState({});
    const [variants, setVariants] = useState([]);

    const context = useContext(LureContext);
    useEffect(() => {
        const getLure = async () => {
            const lure = await context.getLureById(lure_id);
            setLure(lure);
        }
        getLure();
    }, [context, lure_id]);

    useEffect(() => {
        const getLureVariants = async () => {
            const variants = await context.getAllVariantsByLureId(lure_id);
            setVariants(variants);
        }
        getLureVariants();
    }, [context, lure_id])

    return (<React.Fragment>
        {/* <h1>Welcome to product page of {lure.name} </h1>
        <h3>
            Basic Colour Display:
            {variants.map(v => <p>{v.colour.name}</p>)}
        </h3> */}
        <section>
            <div>
                
            </div>
        </section>
    </React.Fragment>)
}