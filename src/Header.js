import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/manage">Manage Garden</Link>
            <Link to="/care">Care</Link>
            <Link to="/account">Account</Link>
        </nav>
    );
}

export default Header;
