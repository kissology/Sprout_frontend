import React, { useState } from 'react';

function Login({updateUser, onLogin, onLogout}){

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
        }).then ((r) => {
            if(r.ok) {
                r.json().then((user) => onLogin(user))
            }
        });
    }

    function handleLogout(){
        fetch("http://localhost:3000/logout", {
            method: "DELETE",
        })
        .then(() => onLogout())
    }

    return (
        <div className="login">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}></input>
            <br></br>
            <input
            type="text"
            name="password"
            placeholder="password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            >
            </input>
            <button type="submit">Login</button>
        </form>
        <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Login;
