import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FirstPage from "../components/SectorsPage/FirstPage";
import ListenLearn from "../components/SectorsPage/ListenLearn";

export default function SectorsPage() {
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
                        <ListenLearn />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
