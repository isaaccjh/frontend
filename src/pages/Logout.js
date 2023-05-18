import "../index.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import UserContext from "../contexts/UserContext";


export default function Logout() {
    const context = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            const response = await context.logout();
            if (response === 'Logged out') {
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
            };
            navigate("/login");
        }
        logout();

    }, [context, navigate])

    return (<>
    </>)
}
