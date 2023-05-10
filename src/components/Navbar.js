import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const [user, setUser] = useState({"d": "d"});

    return (<>
        <nav className="shadow sticky">
            <div className="flex justify-between">
                <ul className="flex items-center gap-8 p-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>


                {user === {} ?
                    <div className="flex items-center gap-8 p-5">
                        <div>
                            <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Link to="/register">Register</Link>
                        </div>
                    </div> :
                    <div className="flex items-center gap-8 p-5">
                        <div>
                            <Link to="/profile">Profile</Link>
                        </div>
                        <div>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                }
            </div>

        </nav>
    </>)
}