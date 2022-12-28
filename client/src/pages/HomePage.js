import React from "react";
import Footer from "../components/Footer";
import FirstPage from "../components/HomePage/FirstPage";
import FourthPage from "../components/HomePage/FourthPage";
import LastestNews from "../components/HomePage/LastestNews";
import OurSectors from "../components/HomePage/OurSectors";
import SecondPage from "../components/HomePage/SecondPage";
import TheConcern from "../components/HomePage/TheConcern";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <>
            <body>
                <header className="navbar--sticky">
                    <Navbar />
                </header>

                <main>
                    <section>
                        <FirstPage />
                    </section>

                    <section className="container">
                        <SecondPage />
                    </section>

                    <section className="container">
                        <TheConcern />
                    </section>

                    <section className="container">
                        <FourthPage />
                    </section>

                    <section className="container">
                        <OurSectors />
                    </section>

                    <section className="container">
                        <LastestNews />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </body>
        </>
    );
}
