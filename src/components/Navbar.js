import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import jwtDecode from "jwt-decode";

import UserContext from "../contexts/UserContext";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const context = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUser(jwtDecode(token));
        } else {
            setUser(null);
        }
       
    }, [])
    return (<>
        <nav className="shadow sticky top-0">
            <div className="flex justify-between">
                <ul className="flex items-center gap-8 p-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>


                {user ?
                    <div className="flex items-center gap-8 p-5">
                        <div>
                            <Link to="/cart">Cart</Link>
                        </div>
                        <div>
                            <Link to="/profile">Profile</Link>
                        </div>
                        <div>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                    :
                    <div className="flex items-center gap-8 p-5">
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                }
            </div>

        </nav>
    </>)
}