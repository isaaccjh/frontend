import CartContext from "../contexts/CartContext";
import axios from "axios";

const url = "https://tgc-project3-express.onrender.com/api";

export default function CartProvider(props) {

    const cartContexts = {
        getCart: async (userId) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            };
            const config = {
                headers: headers
            };
            const response = await axios.get(`${url}/carts/${userId}`, config);
            return response.data;
        },
        updateQuantity: async (userId, variantId, newQuantity) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            };
            const config = {
                headers: headers
            };
            const response = await axios.post(`${url}/carts/update`, {
                "quantity": newQuantity,
                "userId": userId,
                "variantId": variantId
            }, config);
            return response.data;
        },
        removeFromCart: async (userId, variantId) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            };
            const config = {
                headers: headers
            };
            const response = await axios.post(`${url}/carts/delete`, {
                "userId": userId,
                "variantId": variantId
            }, config);
            return response.data
        },
        addToCart: async (userId, variantId, quantity) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            };
            const config = {
                headers: headers
            };
            const response = await axios.post(`${url}/carts/add`, {
                "userId": userId,
                "variantId": variantId,
                "quantity": quantity
            }, config);
            return response.data;
        },
        checkoutCart: async (userId) => {
            const response = await axios.get(`${url}/checkout`, {
                params: {
                    user_id: userId
                }
            });
            return response.data;
        }
    }


    return (
    <CartContext.Provider value={cartContexts}>
        {props.children}
    </CartContext.Provider>
    )
}

