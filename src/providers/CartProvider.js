import CartContext from "../contexts/CartContext";
import axios from "axios";

const url = "https://tgc-project3-express.onrender.com/api";

export default function CartProvider(props) {

    const cartContexts = {
        getCart: async (userId) => {
            const response = await axios.get(`${url}/carts/${userId}`);
            return response.data;
        }
    }


    return (
    <CartContext.Provider value={cartContexts}>
        {props.children}
    </CartContext.Provider>
    )
}

