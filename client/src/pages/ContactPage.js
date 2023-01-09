import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
    return (
        <>
            <div>
                <header className="navbar--sticky">
                    <Navbar />
                </header>

                <main>
                    <section className="container">
                        <Contact />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
