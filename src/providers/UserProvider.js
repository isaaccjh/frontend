import UserContext from "../contexts/UserContext";
import axios from "axios";
import "../index.css";

const url = "https://tgc-project3-express.onrender.com/api";

export default function UserProvider(props) {
    const userContexts = {
        registerUser: async () => {
            const response = await axios.post(`${url}/users/register`);
            return response.data;
        },
        loginUser: async (data) => {
            try {
                const response = await axios.post(`${url}/users/login`, data);
                // console.log("refreshToken:", response.data.refreshToken);
                // console.log("accessToken:", response.data.accessToken);
                return response.data

            } catch (e) {
                console.log(e);
            }   
        },
        getProfile: async () => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
            const config = {
                headers: headers
            }
            const response = await axios.get(`${url}/users/profile`, config);
            return response.data;
        }
    }


    return (
        <UserContext.Provider value={userContexts}>
            {props.children}
        </UserContext.Provider>
    )
}
