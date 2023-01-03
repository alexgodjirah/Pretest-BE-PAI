import React from "react";
import Footer from "../components/Footer";
import FirstPage from "../components/ImpactPage/FirstPage";
import Excellence from "../components/ImpactPage/Excellence";
import Navbar from "../components/Navbar";
import SDG from "../components/ImpactPage/SDG";
import Target from "../components/ImpactPage/Target";
import Testimony from "../components/ImpactPage/Testimony";
import ToWorld from "../components/ImpactPage/ToWorld";

export default function ImpactPage() {
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
                        <Excellence />
                    </section>

                    <section className="container">
                        <SDG />
                    </section>

                    <section className="container">
                        <Target />
                    </section>

                    <section className="container">
                        <Testimony />
                    </section>

                    <section className="contaienr">
                        <ToWorld />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
