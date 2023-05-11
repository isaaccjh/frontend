import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import LureContext from "../contexts/LureContext";

export default function ProductPage() {
    const { lure_id } = useParams();
    const [lure, setLure] = useState({});
    const [variants, setVariants] = useState([]);
    const [displayedLure, setDisplayedLure] = useState(variants[0]);

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
            setDisplayedLure(variants[0]);
        }
        getLureVariants();
    }, [context, lure_id])


    return (<React.Fragment>
        {displayedLure && variants.length > 0 ?
            <section className="flex h-screen items-center">
                <div className="">
                    <div>
                        <h1 className="text-3xl text-bold p-4">{lure.name}</h1>
                    </div>
                    <div>
                        <img className="w-1/2" src={displayedLure.image_url} alt="" />
                    </div>
                </div>
            </section>
            : <p>Loading...</p>}
    </React.Fragment>)
}