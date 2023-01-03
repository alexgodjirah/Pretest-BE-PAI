import React from "react";
import Articles from "../components/BlogPages/Articles";
import FirstPage from "../components/BlogPages/FirstPage";
import News from "../components/BlogPages/News";
import NewsArticle from "../components/BlogPages/NewsArticle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BlogPage() {
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
                        <NewsArticle />
                    </section>

                    <section className="container">
                        <News />
                    </section>

                    <section className="container">
                        <Articles />
                    </section>
                </main>

                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
