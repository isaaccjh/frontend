import "../index.css"
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine, RiDeleteBinFill } from "react-icons/ri"

import CartContext from "../contexts/CartContext"

import jwtDecode from "jwt-decode"
import { Link } from "react-router-dom";

export default function Cart() {
    const [userId, setUserId] = useState();
    const [cartItems, setCartItems] = useState([]);

    const context = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token && token !== undefined) {
            setUserId((jwtDecode(token)).id);
        } else {
            navigate("/login")
        }
    }, [setUserId, navigate])

    useEffect(() => {
        if (userId) {
            const getCart = async () => {
                const cartItems = await context.getCart(userId);
                setCartItems(cartItems);
                console.log(cartItems)
            }
            getCart();
        }

    }, [userId, context])

    const updateQuantity = async (e, itemId) => {
        const itemToUpdate = cartItems.filter(item => item.id === itemId);
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: parseInt(e.target.value)
                }
            }
            return item;
        })
        setCartItems(updatedCart)
        await context.updateQuantity(itemToUpdate[0].user_id, itemToUpdate[0].variant_id, e.target.value);
        await context.getCart(userId)
    }

    const addQuantity = async (itemId) => {
        const itemToUpdate = cartItems.filter(item => item.id === itemId);
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        })
        setCartItems(updatedCart);
        await context.updateQuantity(itemToUpdate[0].user_id, itemToUpdate[0].variant_id, (itemToUpdate[0].quantity + 1))
        await context.getCart(userId)
    }

    const minusQuantity = async (itemId) => {
        const itemToUpdate = cartItems.filter(item => item.id === itemId);
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        })
        setCartItems(updatedCart);
        await context.updateQuantity(itemToUpdate[0].user_id, itemToUpdate[0].variant_id, (itemToUpdate[0].quantity - 1))
    };

    const removeItem = async (itemId) => {
        const itemToRemove = cartItems.filter(item => item.id === itemId);
        await context.removeFromCart(itemToRemove[0].user_id, itemToRemove[0].variant_id);

        const newCart = await context.getCart(userId);
        setCartItems(newCart);
        await context.getCart(userId)
    }

    let url;
    if (userId) {
        url = `https://tgc-project3-express.onrender.com/api/checkout/${userId}/checkout`
    }

    return (<>
        <h1 className="text-3xl font-bold mt-5 flex justify-center">Your Cart</h1>
        <ul className="flex flex-col items-center mt-4">
            {cartItems && cartItems.length > 0 ? cartItems.map(item => {
                return (
                    <li key={item.id} className="p-14 pl-10 m-2 border-2 rounded-md w-3/4 flex items-center h-[95px] gap-3 bg-slate-50">
                        <img className="bg-slate-50" src={item.variant.thumbnail_url} alt="" />
                        <div className="flex flex-col">
                            <div className="bg-slate-50">
                                {item.variant.lure.name}
                            </div>
                            <div className="bg-slate-50 text-gray-500">
                                <div className="text-xs bg-slate-50">
                                    Colour: {item.variant.colour.name}
                                </div>
                                <div className="text-xs bg-slate-50">
                                    Property: {item.variant.property.name}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2 bg-slate-50">
                            <button onClick={() => minusQuantity(item.id)}>&minus;</button>
                            <input onChange={(e) => updateQuantity(e, item.id)} name="quantity" type="number" value={item.quantity} className="h-8 text-center w-11" />
                            <button onClick={() => addQuantity(item.id)}>+</button>
                            <button onClick={() => removeItem(item.id)} className="ml-2 bg-slate-50"><RiDeleteBinLine className="bg-slate-50" /></button>
                        </div>
                    </li>
                )
            }) : <p className="text-2xl">Cart is empty!</p>}
        </ul>
        <hr className="my-4" />
        <a href={url}>
            <div className="flex justify-center">
                <button type="submit" className="flex p-4 border-2 rounded-md mt-3 justify-center hover:bg-slate-500 bg-slate-100 w-1/3" to="/checkout">Checkout</button>
            </div>
        </a>
    </>)
}