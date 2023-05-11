import "../index.css"
import { useContext, useState, useEffect } from "react";

import CartContext from "../contexts/CartContext"

import jwtDecode from "jwt-decode"
import { Link } from "react-router-dom";

export default function Cart() {
    const [userId, setUserId] = useState();
    const [cartItems, setCartItems] = useState([]);
    const context = useContext(CartContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUserId((jwtDecode(token)).id)
        }

    }, [setUserId, userId])

    useEffect(() => {
        const getCart = async () => {
            const cartItems = await context.getCart(userId);
            setCartItems(cartItems);
            console.log(cartItems);
        }
        getCart();
    }, [context, userId])

    return (<>
        <h1 className="text-3xl font-bold mt-5 flex justify-center">Your Cart</h1>
        <ul className="flex flex-col items-center mt-4">
            {cartItems && cartItems.length > 0 ? cartItems.map(item => (
                <li className="p-14 pl-10 m-2 border-2 rounded-md w-3/4 flex items-center h-[95px] gap-3 bg-slate-50">
                    <img src={item.variant.thumbnail_url} alt="" />
                    <div className="flex flex-col">
                    <div >
                        {item.variant.lure.name}
                    </div>
                    <div className=" text-gray-500">
                        <div className="text-xs">
                        Colour: {item.variant.colour.name}
                        </div>
                        <div className="text-xs">
                        Property: {item.variant.property.name}
                        </div>
                    </div>
                    </div>
                </li>
            )) : <p>Cart is empty!</p>}
        </ul>
        <Link to="/checkout"className="flex justify-center">
        <button className="flex p-4 border-2 rounded-md mt-3 justify-center hover:bg-slate-500 bg-slate-100 w-1/3">Checkout</button>
        </Link>
    </>)
}