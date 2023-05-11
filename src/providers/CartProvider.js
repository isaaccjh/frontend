import CartContext from "../contexts/CartContext";
import axios from "axios";

const url = "https://tgc-project3-express.onrender.com/api";

export default function CartProvider(props) {

    const cartContexts = {
        getCart: async (userId) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
            const config = {
                headers: headers
            }
            const response = await axios.get(`${url}/carts/${userId}`, config);
            return response.data;
        },
        updateQuantity: async (userId, variantId, newQuantity) => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
            const config = {
                headers: headers
            }
            const response = await axios.post(`${url}/carts/update`, {
                "quantity": newQuantity,
                "userId": userId,
                "variantId": variantId
            }, config);
            return response.data;
        }
    }


    return (
    <CartContext.Provider value={cartContexts}>
        {props.children}
    </CartContext.Provider>
    )
}

