import { Link } from "react-router-dom";

export default function Navbar() {
    return (<>
        <nav className="shadow">
            <div className="flex justify-between">
                <ul className="flex items-center justify-start gap-8 p-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>


                <div className="flex items-center gap-8 p-5">
                    <div>
                        <Link>Login</Link>
                    </div>
                    <div>
                        <Link>Register</Link>
                    </div>
                </div>
            </div>

        </nav>
    </>)
}