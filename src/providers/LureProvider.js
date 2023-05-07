import LureContext from "../contexts/LureContext";
import axios from "axios";
import "../index.css"

const url = "https://tgc-project3-express.onrender.com/api";

export default function LureProvider(props) {
    const lureContexts = {
        getAllLures: async () => {
            const response = await axios.get(`${url}/lures`);
            console.log(response.data);
            return response.data;
        },
        getVariantsByLureId: async (lureId) => {
            const response = await axios.get(`${url}/lures/${lureId}`);
            console.log(response.data);
            return response.data
        }
    }

    return (
        <LureContext.Provider value={lureContexts}>
            {props.children}
        </LureContext.Provider>
    )
}