import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "../index.css"

import UserContext from "../contexts/UserContext";

const moment = require("moment");
moment().format();

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

    return (<>
        <div className="p-5">
            <h1 className="text-xl text-bold">Profile Details</h1>
            <div>
                <div>ID: {userDetails?.id}</div>
                <div>Username: {userDetails?.username ? userDetails?.username : null}</div>
                <div>First Name: {userDetails?.first_name ? userDetails?.first_name : null}</div>
                <div>Last Name : {userDetails?.last_name ? userDetails?.last_name : null}</div>
                <div>Contact Number:{userDetails?.contact_number ? userDetails?.contact_number : null}</div>
                <div>Email: {userDetails?.email}</div>
            </div>
            <h1 className="text-xl text-bold p-3 pl-0">Orders</h1>
            {userOrders && userOrders.length !== 0 ?
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-xs text-left text-gray-700">
                        <thead className="text-[10px] text-gray-900 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-2">Order ID</th>
                                <th className="px-4 py-2">Shipping Address</th>
                                <th className="px-4 py-2">Total Cost</th>
                                <th className="px-4 py-2">Payment Type</th>
                                <th className="px-4 py-2">Order Status</th>
                                <th className="px-4 py-2">Order Date</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userOrders.map(order => {
                                return (
                                    <tr key={order.id} className="bg-white border-b">
                                        <td className="px-4 py-2">{order.id}</td>
                                        <td className="px-4 py-2">{order.shipping_address_line_1}{order.shipping_address_line_2}</td>
                                        <td className="px-4 py-2">${order.total_cost / 100}</td>
                                        <td className="px-4 py-2">{order.payment_type[0].toUpperCase()}{order.payment_type.slice(1)}</td>
                                        <td className="px-4 py-2">{order.order_status.order_status}</td>
                                        <td className="px-4 py-2">{moment(order.order_date).format("YYYY-MM-DD")}</td>
                                        <td className="px-4 py-2"><Link className="">Update</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                : <p>No orders</p>}
        </div>
    </>)
}