import React from "react";
import FirstPage from "../components/AboutPage/FirstPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ProductPage() {
    return (
        <>
            <div>
                <header className="navbar--sticky">
                    <Navbar />
                </header>

                <main>
                    <section>
                        <FirstPage />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}
