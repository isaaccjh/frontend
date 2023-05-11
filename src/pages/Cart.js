import "../index.css"
import { useContext, useState, useEffect } from "react";

import CartContext from "../contexts/CartContext"

import jwtDecode from "jwt-decode"

export default function Cart() {
    const [userId, setUserId] = useState(0);
    const context = useContext(CartContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUserId((jwtDecode(token)).id)
        } else {
            setUserId(0);
        }
    }, [setUserId])

    useEffect(() => {
        const getCart = async () => {
            const cartItems = await context.getCart(userId);
            console.log(cartItems);
        }
        getCart();
    }, [context, userId])

   

    return (<>
    </>)
}