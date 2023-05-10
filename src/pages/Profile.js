import React, { useContext, useState, useEffect } from "react";

import UserContext from "../contexts/UserContext";


export default function Profile() {
    const context = useContext(UserContext);
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const getProfileDetails = async () => {
            const details = await context.getProfile();
            setUserDetails(details);
            return userDetails;
        }

        getProfileDetails();
        console.log(userDetails)
    }, [context, userDetails])

    console.log(userDetails);

    return (<>
        <div>Profile</div>
    </>)
}