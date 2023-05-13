import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
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
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-4 py-2">Order ID</th>
                            <th scope="col" class="px-4 py-2">Shipping Address</th>
                            <th scope="col" class="px-4 py-2">Total Cost</th>
                            <th scope="col" class="px-4 py-2">Payment Type</th>
                            <th scope="col" class="px-4 py-2">Order Status</th>
                            <th scope="col" class="px-4 py-2">Order Date</th>
                            <th scope="col" class="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders.map(order => {
                            return (
                                <tr key={order.id} scope="row" className="bg-white border-b">
                                    <td className="px-4 py-2">{order.id}</td>
                                    <td className="px-4 py-2">{order.shipping_address_line_1}{order.shipping_address_line_2}</td>
                                    <td className="px-4 py-2">{order.total_cost / 100}</td>
                                    <td className="px-4 py-2">{order.payment_type}</td>
                                    <td className="px-4 py-2">{order.order_status.order_status}</td>
                                    <td className="px-4 py-2">{order.order_date}</td>
                                    <td className="px-4 py-2"><Link className="font-medium">Update</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            : <p>No orders</p>}

    </>)
}