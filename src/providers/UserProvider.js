import UserContext from "../contexts/UserContext";
import axios from "axios";

const url = "https://tgc-project3-express.onrender.com/api";

export default function UserProvider(props) {

    const userContexts = {
        registerUser: async (registerInfo) => {
            console.log(registerInfo);
            const response = await axios.post(`${url}/users/register`, registerInfo);
            return response.data;
        },
        loginUser: async (data) => {
            try {
                const response = await axios.post(`${url}/users/login`, data);
                // console.log("refreshToken:", response.data.refreshToken);
                // console.log("accessToken:", response.data.accessToken);
                if (response.data.error === "Invalid login.") {
                    return response.data.error;
                } else {
                    return response.data;
                }

            } catch (e) {
                console.log(e);
            }
        },
        getProfile: async () => {
            try {
                const headers = {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
                const config = {
                    headers: headers
                }
                const response = await axios.get(`${url}/users/profile`, config);
                return response.data;
            } catch (e) {
                return "Not logged in"
            }
        },
        logout: async () => {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                const response = await axios.post(`${url}/users/logout`, {
                    "refreshToken": refreshToken
                });
                return response.data.message;
            } else {
                return false;
            }
        },
        checkIfLoggedIn: () => {
            return localStorage.getItem("accessToken") && localStorage.getItem("accessToken") !== undefined ? true : false;
        },
        getOrdersByUserId: async (userId) => {
            const response = await axios.get(`${url}/orders/${userId}`);
            return response.data;
        }
    }


    return (
        <UserContext.Provider value={userContexts}>
            {props.children}
        </UserContext.Provider>
    )
}
