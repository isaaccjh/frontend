import LureContext from "../contexts/LureContext";
import axios from "axios";
import "../index.css"

const url = "https://tgc-project3-express.onrender.com/api";

export default function LureProvider(props) {
    const lureContexts = {
        getAllLures: async () => {
            const response = await axios.get(`${url}/lures`);
            return response.data;
        },
        getAllVariants: async () => {
            const response = await axios.get(`${url}/lures/variants`);
            return response.data
        },
        getLureById: async (lureId) => {
            const response = await axios.get(`${url}/lures/${lureId}`);
            return response.data;
        },
        getAllVariantsByLureId: async (lureId) => {
            const response = await axios.get(`${url}/lures/${lureId}/variants`);
            return response.data;
        }
    }

    return (
        <LureContext.Provider value={lureContexts}>
            {props.children}
        </LureContext.Provider>
    )
}