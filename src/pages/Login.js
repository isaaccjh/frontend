import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { MdOutlineAlternateEmail } from "react-icons/md"
import { IoIosEyeOff, IoIosEye } from "react-icons/io"

import UserContext from "../contexts/UserContext";
import { checkPassword } from "../validator/password";

export default function Login() {
    const navigate = useNavigate();
    let context = useContext(UserContext);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [formState, setFormState] = useState({
        "email": "",
        "password": ""
    });

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

    const submitForm = async () => {
        // validate the form
        if (formState.password && formState.email) {
            const response = await context.loginUser({
                "password": formState.password,
                "email": formState.email
            });

            if (response !== "Invalid login.") {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);

                navigate("/products");
            } else {
                toast.error(response);
            }
        };

    }

    return (<>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-[#252525] sm:text-3xl">
                    Join Us today!
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-[#252525]">
                    Whether you're a seasoned angler or just dipping your toes into the world of fishing, you've arrived at the perfect destination for all your lure needs.
                </p>

                <div
                    action=""
                    className="mb-0 mt-6 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-[#252525] text-lg font-medium">Login to your account</p>

                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                onChange={updateFormField}
                                value={formState.email}
                                name="email"
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-3 pe-11 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 border-gray-200 end-0 grid place-content-center px-4">
                                <MdOutlineAlternateEmail />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                onChange={updateFormField}
                                value={formState.password}
                                name="password"
                                type={passwordVisibility ? "text" : "password"}
                                className="w-full rounded-lg border-gray-200 p-3 pe-11 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <button onClick={togglePasswordVisibility} className="absolute inset-y-0 border-gray-200 end-0 grid place-content-center px-4">
                                {passwordVisibility ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={submitForm}
                        className="block w-full rounded-lg bg-yellow-200 hover:bg-yellow-400 px-5 py-3 text-sm font-medium text-[#252525]"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-800">
                        No account?
                        <Link className="underline text-sm ml-2 hover:text-blue-700" to="/register">Sign up</Link>
                    </p>
                </div>
            </div>
        </div >
    </>)
}