import React, { useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

import UserContext from "../contexts/UserContext";


export default function Profile() {
    const context = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({});
    const [userOrders, setUserOrders] = useState({});

    useEffect(() => {
        const getProfileDetails = async () => {
            const details = await context.getProfile();
            setUserDetails(details);
        }

        getProfileDetails();
    }, [context]);

    useEffect(() => {
        const getOrders = async () => {
            const token = localStorage.getItem("accessToken");
            if (token && token !== undefined) {
                const orders = 
            }
        }
    }, [])


    return (<>
        <div>Profile</div>
        
    </>)
}