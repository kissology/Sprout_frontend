import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
        <div className='navbar'>
        <Link exact path to="/">
            Login
        </Link>
        <br></br>
        <Link exact path to="/home">
            Home
        </Link>
        <br></br>
        <Link exact path to="/browse">
            Browse
        </Link>
        <br></br>
        <Link exact path to="/care">
            Care
        </Link>
        <br></br>
        <Link exact path to="/manage">
            Manage
        </Link>
        <br></br>
        <Link exact path to="/account">
            Account
        </Link>
        <br></br>



        </div>
        </nav>
    )
}

export default Navbar;