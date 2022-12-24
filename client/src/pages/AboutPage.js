import React from "react";
import AboutPAI from "../components/AboutPage/AboutPAI";
import Appreciation from "../components/AboutPage/Appreciation";
import FirstPage from "../components/AboutPage/FirstPage";
import Network from "../components/AboutPage/Network";
import Team from "../components/AboutPage/Team";
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

                    <section className="container">
                        <AboutPAI />
                    </section>

                    <section className="container">
                        <Team />
                    </section>

                    <section className="container">
                        <Appreciation />
                    </section>

                    <section className="container">
                        <Network />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}
