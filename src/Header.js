import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
    return (
        <nav className="nav-bar">
        <Link exact path to="/">
            Login
        </Link>
        <Link exact path to="/home">
            Home
        </Link>
        <Link exact path to="/browse">
            Browse
        </Link>
        <Link exact path to="/care">
            Care
        </Link>
        <Link exact path to="/manage">
            Manage
        </Link>
        <Link exact path to="/account">
            Account
        </Link>
        <Link exact path to="/signup">
            Signup
        </Link>
    
        </nav>


    )
}

export default Header;