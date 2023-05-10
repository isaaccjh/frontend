import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import UserContext from "../contexts/UserContext";
import { checkPassword } from "../validator/password";

export default function Login() {
    const navigate = useNavigate();
    let context = useContext(UserContext);
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

    const submitForm = async () => {
        if (formState.password && formState.email) {
            const response = await context.loginUser({
                "password": formState.password,
                "email": formState.email
            });
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            console.log(localStorage)
            
            navigate("/products")
        };
       
    }

    return (<>
        <h1>Login</h1>
        <div>
            <label>Email:</label>
            <input 
                type="email" 
                className="ml-2" 
                name="email"
                value={formState.email}
                onChange={updateFormField}
            />
        </div>
        <div>
            <label>Password:</label>
            <input 
                type="password" 
                className="ml-2" 
                name="password"
                value={formState.password}
                onChange={updateFormField}
            />
        </div>
        <button type="submit" onClick={submitForm} className=" bg-blue-600">Login</button>
    </>)
}