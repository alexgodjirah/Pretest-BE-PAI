import React from "react";
import Culture from "../components/CareerPage/Culture";
import FirstPage from "../components/CareerPage/FirstPage";
import Value from "../components/CareerPage/Value";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CareerPage() {
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

                    <section className="container">
                        <Value />
                    </section>

                    <section>
                        <Culture />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
