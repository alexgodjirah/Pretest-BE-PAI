import React from "react";
import { NavLink } from "react-router-dom";

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

    const navbarItems = [
        {
            id: 1,
            link: "/about",
            title: "About Us",
        },
        {
            id: 2,
            link: "/impact",
            title: "Impact",
        },
        {
            id: 3,
            link: "/products",
            title: "Products",
        },
        {
            id: 4,
            link: "/blog",
            title: "Blog",
        },
        {
            id: 5,
            link: "/career",
            title: "Career",
        },
        {
            id: 6,
            link: "/contact",
            title: "Contact",
        },
    ];

    return (
        <header className="header container">
            <div className="navbar--logo">
                <h3 className="font--h3">Logo</h3>
            </div>
            <nav className="navbar">
                <div className="navbar--items">
                    <ul className="items--list">
                        {navbarItems.map((item) => (
                            <CustomLink key={item.id} to={item.link}>
                                {item.title}
                            </CustomLink>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

const CustomLink = ({ to, children, ...props }) => {
    // const resolvedPath = useResolvedPath(to);
    // const isActive = useMatch({ path: resolvedPath.pathname });

    return (
        <li>
            <NavLink
                to={to}
                {...props}
                className={({ isActive }) =>
                    isActive
                        ? "font--h3 list--items item--active"
                        : "font--h3 list--items"
                }
            >
                {children}
            </NavLink>
        </li>
    );
};
