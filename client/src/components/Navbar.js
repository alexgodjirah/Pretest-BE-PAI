import React from "react";
import "../styles/navbar/navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar container">
                <div>Logo</div>
                <div className="navbar--items">
                    <ul className="items--list">
                        <li>About Us</li>
                        <li>Impact</li>
                        <li>Products</li>
                        <li>Sectors</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Contact</li>
                        <li>language</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
