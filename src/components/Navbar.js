import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import jwtDecode from "jwt-decode";

import { BsSearch, BsBag } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx"; 

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
        <header aria-label="Site Header" className="border-b border-gray-100">
            <div
                className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
            >
                <div className="flex items-center gap-4">
                    <button type="button" className="p-2 lg:hidden">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <a href="#" className="flex">
                        <span className="sr-only">Logo</span>
                        <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Site Nav"
                        className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                    >
                        <a
                            href="/about"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            About
                        </a>

                        <a
                            href="/news"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            News
                        </a>

                        <a
                            href="/products"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Products
                        </a>

                        <a
                            href="/contact"
                            className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center border-x border-gray-100">
                            <span className="border-e border-e-gray-100">
                                <a
                                    href="/cart"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                >
                                    <BsBag />

                                    <span className="sr-only">Cart</span>
                                </a>
                            </span>

                            <span className="border-e border-e-gray-100">
                                <a
                                    href="/account"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                >
                                    <RxAvatar className="scale-[1.2]"/>

                                    <span className="sr-only"> Account </span>
                                </a>
                            </span>

                            <span className="hidden sm:block">
                                <button href="/search"
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
    </>)
}