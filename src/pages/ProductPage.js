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
    }, [context, lure_id]);

    const changeDisplay = (variantId) => {
        const newDisplay = variants.filter(variant => variant.id === variantId);
        setDisplayedLure(newDisplay[0]);
    }


    return (<React.Fragment>
        {displayedLure && variants.length > 0 ?
            <section>
                <div className="flex flex-col h-2/6 r">
                    <div>
                        <h1 className="text-3xl text-bold p-4">{lure.name}</h1>
                    </div>
                    <div>
                        <img className="w-1/2 h-[200px]" src={displayedLure.image_url} alt="" />
                    </div>
                </div>
                <div className="flex">
                    {variants.map(variant => {
                        if (variant.colour.name === displayedLure.colour.name) {
                            return (
                                <button
                                    className="text-xs p-2 m-2 border rounded-3xl bg-yellow-400 " >{variant.colour.name}</button>
                            );
                        };
                        return (
                            <button
                                onClick={() => changeDisplay(variant.id)}
                                className="text-xs p-2 m-2 border rounded-3xl hover:bg-yellow-400 " >{variant.colour.name}</button>
                        )
                    })}
                </div>
            </section>
            : <p>Loading...</p>}
    </React.Fragment>)
}