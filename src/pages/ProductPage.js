import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import LureContext from "../contexts/LureContext";

export default function ProductPage() {
    const { lure_id } = useParams();
    const [lure, setLure] = useState({})

    const context = useContext(LureContext);
    useEffect(() => {
        const getLure = async () => {
            let lure = await context.getLureById(lure_id);
            setLure(lure);
        }
        getLure(context, lure_id);
    }, [context, lure_id])

    return (<React.Fragment>
        <h1>Welcome to product page of {lure.name} </h1>
    </React.Fragment>)
}