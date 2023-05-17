import React, { useContext, useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import LureContext from "../contexts/LureContext";
import CartContext from "../contexts/CartContext";


import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from "jwt-decode";

export default function ProductPage() {
    const { lure_id } = useParams();
    const [lure, setLure] = useState({});
    const [variants, setVariants] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [displayedLure, setDisplayedLure] = useState(variants[0]);
    const [readMore, setReadMore] = useState(false);

    const cartContext = useContext(CartContext)
    const lureContext = useContext(LureContext);

    const navigate = useNavigate();

    useEffect(() => {
        const getLure = async () => {
            const lure = await lureContext.getLureById(lure_id);
            setLure(lure);
        }
        getLure();
    }, [lureContext, lure_id]);

    useEffect(() => {
        const getLureVariants = async () => {
            const variants = await lureContext.getAllVariantsByLureId(lure_id);
            setVariants(variants);
            setDisplayedLure(variants[0]);
        }
        getLureVariants();
    }, [lureContext, lure_id]);

    const changeDisplay = (variantId) => {
        const newDisplay = variants.filter(variant => variant.id === variantId);
        setDisplayedLure(newDisplay[0]);
    }

    const addToCart = async (itemId) => {
        let userId = null;
        const token = localStorage.getItem("accessToken");
        if (token) {
            userId = jwtDecode(token).id;
        } else {
            navigate("/login")
        };
        const response = await cartContext.addToCart(userId, displayedLure.id, quantity);
        if (response === true) {
            toast.success("Successfully added to cart!")
        } else {
            toast.error("An error has occurred. Please try again.")
        }
    }

    const updateQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const toggleReadMore = () => {
        setReadMore(!readMore)
    }



    return (<React.Fragment>
        <ToastContainer className="bg-transparent"
            autoClose={2500} />
        {displayedLure && lure && variants.length > 0 && Object.keys(lure).length > 0 ?
            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <img
                                alt={displayedLure.colour.name}
                                src={displayedLure.image_url}
                                className="aspect-square object-contain w-full rounded-xl bg-slate-100"
                            />
                        </div>
                        <div className="sticky top-0">
                            <strong
                                className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            >
                                {displayedLure.lure.type}
                            </strong>

                            <div className="mt-8 flex justify-between">
                                <div className="max-w-[35ch] space-y-2">
                                    <h1 className="text-xl font-bold sm:text-2xl">
                                        {lure.name}
                                    </h1>

                                    <p className="text-sm text-gray-800">VARIANT: {displayedLure.colour.name}</p>

                                </div>

                                <p className="text-lg font-bold">${displayedLure.cost / 100}</p>
                            </div>

                            <div className="mt-4">
                                <div className="prose max-w-none">
                                    <p>
                                        {readMore ? lure.description : `${lure.description.slice(0, lure.description.length / 3)}...`}
                                    </p>
                                </div>

                                <button onClick={toggleReadMore} className="mt-2 text-sm font-medium underline">{readMore ? "Read less" : "Read more"}</button>
                            </div>

                            <div className="flex mt-14">
                                {variants.map(variant => {
                                    if (variant?.colour?.name === displayedLure?.colour?.name) {
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

                            <div className="mt-8 flex gap-4">
                                <div>
                                    <label for="quantity" className="sr-only">Qty</label>

                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        value={quantity}
                                        onChange={updateQuantity}
                                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                </div>

                                <button
                                    className="block rounded bg-yellow-400 px-5 py-3 text-xs font-medium text-[#252525] hover:bg-yellow-500"
                                    onClick={() => addToCart(displayedLure.id)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            : <p>Loading...</p>
        }
    </React.Fragment >)
}