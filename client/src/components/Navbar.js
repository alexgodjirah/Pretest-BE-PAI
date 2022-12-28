import React from "react";
import "../styles/Navbar/index.css";

export default function Navbar() {
    React.useEffect(() => {
        const body = document.body;
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }

            if (
                currentScroll > lastScroll &&
                !body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }

            if (
                currentScroll < lastScroll &&
                body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }

            lastScroll = currentScroll;
        });
    });

    return (
        <header className="header container">
            <div className="navbar--logo">
                <h3 className="font--h3">Logo</h3>
            </div>
            <nav className="navbar">
                <div className="navbar--items">
                    <ul className="items--list">
                        <li className="list--items">
                            <a href="/about" className="font--h3">
                                About Us
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="/impact" className="font--h3">
                                Impact
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Products
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Sectors
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Blog
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Career
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Contact
                            </a>
                        </li>
                        <li className="list--items">
                            <a href="#" className="font--h3">
                                Language
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
