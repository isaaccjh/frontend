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
        console.log(displayedLure);
    }


    return (<React.Fragment>
        {displayedLure && variants.length > 0 ?
            <section>
                <div className="flex flex-col items-center h-2/6">
                    <div>
                        <h1 className="text-3xl text-bold p-4">{lure.name}</h1>
                    </div>
                    <div className="shadow-md rounded-lg">
                        <img className="w-full h-[200px]" src={displayedLure.image_url} alt="" />
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    {variants.map(variant => {
                        if (variant.colour.name === displayedLure.colour.name) {
                            return (
                                <button
                                    key={variant.id}
                                    className="text-xs p-2 m-2 border rounded-3xl bg-yellow-400 " >{variant.colour.name}</button>
                            );
                        };
                        return (
                            <button
                                key={variant.id}
                                onClick={() => changeDisplay(variant.id)}
                                className="text-xs p-2 m-2 border rounded-3xl hover:bg-yellow-400 " >{variant.colour.name}</button>
                        )
                    })}
                </div>
                <div>
                    <div className="px-10 mt-4">
                        {lure.description}
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-end px-20">
                            <div className="border-2 p-4 rounded-md">
                                Cost: ${displayedLure.cost / 100}
                            </div>
                        </div>
                        <div className="flex flex-col items-start px-10 mr-10">
                            <div className="border-2 p-4 rounded-md">
                                Specifications:
                                <div className="text-sm">
                                    Depth: {lure.depth === "0" ? "All" : lure.depth}
                                </div>
                                <div className="text-sm">
                                    Hook: {lure.hook}
                                </div>
                                <div className="text-sm">
                                    Type: {lure.type}
                                </div>
                                <div className="text-sm">
                                    Size: {lure.size}mm
                                </div>
                                <div className="text-sm">
                                    Weight: {lure.weight}g
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            : <p>Loading...</p>}
    </React.Fragment>)
}