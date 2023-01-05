import React from "react";
import Culture from "../components/CareerPage/Culture";
import FAQ from "../components/CareerPage/FAQ";
import FirstPage from "../components/CareerPage/FirstPage";
import PAIoners from "../components/CareerPage/PAIoners";
import Perks from "../components/CareerPage/Perks";
import Position from "../components/CareerPage/Position";
import Recruitment from "../components/CareerPage/Recruitment";
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

                    <section className="container">
                        <Culture />
                    </section>

                    <section className="container">
                        <Perks />
                    </section>

                    <section className="container">
                        <PAIoners />
                    </section>

                    <section className="container">
                        <Position />
                    </section>

                    <section className="container">
                        <Recruitment />
                    </section>

                    <section className="container">
                        <FAQ />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
