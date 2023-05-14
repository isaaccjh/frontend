import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { easeInOut, useAnimate } from "framer-motion";
import jwtDecode from "jwt-decode";

import { BsSearch, BsBag } from "react-icons/bs";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";

import SearchBar from "./SearchBar";

import UserContext from "../contexts/UserContext";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [hamburger, setHamburger] = useState(false);
    const [userSettings, setUserSettings] = useState(false);
    const [searchStatus, setSearchStatus] = useState(false)
    const [scope, animate] = useAnimate();

    const context = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUser(jwtDecode(token));
        } else {
            setUser(null);
        }

    }, []);


    const toggleHamburger = () => {
        setHamburger(!hamburger);
    };

    const toggleUserSettings = () => {
        setUserSettings(!userSettings);
    };

    const toggleSearchStatus = () => {
        setSearchStatus(!searchStatus);
        animate(scope.current, !searchStatus ? {y : 0} : {y : -50}, {
            duration: 0.2
        } )
    };


    return (<>
        <header className="border-b border-gray-100 bg-yellow-400 sticky top-0 z-50">
            <div
                className="mx-auto shadow flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div className="flex items-center gap-4 p-2">
                    <button onClick={toggleHamburger} type="button" className="p-2 border-2 rounded-lg lg:hidden" >
                        <RxHamburgerMenu className="h-6 w-6" />
                    </button>

                    <Link to="/home" className="flex">
                        <span className="sr-only">Logo</span>
                        <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">
                    <nav className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-[#252525]">
                        <Link href="/home" className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-yellow-400">
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-yellow-400"
                        >
                            About
                        </Link>

                        <Link
                            to="/products"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-yellow-400"
                        >
                            Products
                        </Link>

                        <Link
                            href="/contact"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-yellow-400"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center border-x border-gray-100">
                            <span className="border-e border-e-gray-100">
                                <Link to="/cart" className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-yellow-400">
                                    <BsBag />

                                    <span className="sr-only">Cart</span>
                                </Link>
                            </span>
                            <div className="flex-col relative h-[67px]">
                                <span className="border-e border-e-gray-100">
                                    <button onClick={toggleUserSettings} href="/account" className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-yellow-400">
                                        <RxAvatar className="scale-[1.2]" />
                                        <span className="sr-only"> Account </span>
                                    </button>
                                </span>
                                <div className={userSettings ? "user flex-col mt-2 absolute bg-white px-8 border-2 rounded-lg py-1 opacity-100 mb-6 top-full" : "hidden mb-6"}>
                                    <div>
                                        <div className="hover:underline w-full">
                                            <Link>Settings</Link>
                                        </div>
                                    </div>
                                    <div className="hover:underline">
                                        <Link to="/profile">Profile</Link>
                                    </div>
                                    <hr />
                                    <div className="hover:underline">
                                        {context.checkIfLoggedIn() ? <Link onClick={toggleUserSettings} to="/logout">Log out</Link> : <Link onClick={toggleUserSettings} to="/login">Login</Link>}
                                    </div>
                                </div>
                            </div>
                            <span className="hidden sm:block">
                                <button
                                    onClick={toggleSearchStatus}
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-yellow-400">
                                    <BsSearch />
                                    <span className="sr-only"> Search </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div ref={scope}className="pl-5">
            {searchStatus ? <SearchBar /> : null}
        </div>
    </>)
}