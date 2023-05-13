import React, { useContext, useState, useEffect } from "react";

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
        const getOrdersByUserId = async () => {
            if (Object.keys(userDetails).length !== 0) {
                const orders = await context.getOrdersByUserId(userDetails.id);
                setUserOrders(orders);
                return orders;
            }
        }
        getOrdersByUserId();
    }, [context, userDetails]);

    useEffect(() => {
        console.log("userOrders:", userOrders);
    }, [userOrders])

    

    return (<>
        <div>Profile</div>

    </>)
}