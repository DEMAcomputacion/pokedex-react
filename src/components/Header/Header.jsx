import React from "react";
import './Header.css'
import Logo from './logo.png'

function Header() {
    return (
        <div className="header-class">
            <img src={Logo} alt="logo" className="logo" />
        </div>
    )
}

export default Header;