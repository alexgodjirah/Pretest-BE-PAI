import React from "react";
import "../styles/Navbar/index.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar container">
                <div>
                    <h3>Logo</h3>
                </div>
                <div className="navbar--items">
                    <ul className="items--list">
                        <li className="list--items">
                            <h3>About Us</h3>
                        </li>
                        <li className="list--items">
                            <h3>Impact</h3>
                        </li>
                        <li className="list--items">
                            <h3>Products</h3>
                        </li>
                        <li className="list--items">
                            <h3>Sectors</h3>
                        </li>
                        <li className="list--items">
                            <h3>Blog</h3>
                        </li>
                        <li className="list--items">
                            <h3>Career</h3>
                        </li>
                        <li className="list--items">
                            <h3>Contact</h3>
                        </li>
                        <li className="list--items">
                            <h3>Language</h3>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
