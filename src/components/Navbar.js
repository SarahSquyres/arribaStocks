import React from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="https://github.com/SarahSquyres/arribaStocks" target='_blank'><img src={logo} alt="Logo" className="logo" />
            </a>
        </nav>
    );
};

export default Navbar;