import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login({onLogin}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        const user ={
            email,
            password,
        }
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user}),
        })
        .then((r) => {
            if(r.ok) {
                return r.json().then((user) => {
                    onLogin(user)
                    alert("You are successfully logged in!")
                })
            }
            throw new Error("Invalid Username or Password")
        })
        .catch(error => {
            alert("Invalid Username or Password", error);
        });
    }


    return (
        <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
            <input
            className="email-input"
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}></input>
            <br></br>
            <input
            className="password-input"
            type="password"
            name="password"
            placeholder="password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            >
            </input>
            <button type="login" className="login-button">Login</button>
            <br></br>
            <p style={{color: "black", position: "relative", top: "50px"}}>Not Registered? <Link exact path to="/signup">Signup</Link></p>
        </form>
        </div>
    )
}

export default Login;