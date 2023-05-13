import React, { useContext, useState, useEffect } from "react";
import "../index.css"

import UserContext from "../contexts/UserContext";


export default function Profile() {
    const context = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({});
    const [userOrders, setUserOrders] = useState([]);

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

        {userOrders && userOrders.length !== 0 ?
            <div className="relative">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="p-3">Order ID</th>
                            <th>Shipping Address</th>
                            <th>Total Cost</th>
                            <th>Payment Type</th>
                            <th>Order Status</th>
                            <th>Order Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders.map(order => {
                            return (
                                <tr key={order.id}>
                                    <td className="p-3">{order.id}</td>
                                    <td>{order.shipping_address_line_1}{order.shipping_address_line_2}</td>
                                    <td>{order.total_cost / 100}</td>
                                    <td>{order.payment_type}</td>
                                    <td>{order.order_status.order_status}</td>
                                    <td>{order.order_date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            : <p>No orders</p>}

    </>)
}