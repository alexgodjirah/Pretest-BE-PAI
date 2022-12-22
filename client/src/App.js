import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <nav className="navbar--sticky">
                <Navbar />
            </nav>

            <main>
                <FirstPage />
            </main>

            <main className="container">
                <SecondPage />
            </main>

            <main className="container">
                <ThirdPage />
            </main>

            <main className="container">
                <FourthPage />
            </main>

            <main className="container">
                <FifthPage />
            </main>

            <main className="container">
                <SixthPage />
            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
