import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";

function App() {
    return (
        <div className="App">
            <nav className="navbar--sticky">
                <Navbar />
            </nav>
            <main>
                <FirstPage />
            </main>
            <main>
                <SecondPage />
            </main>
        </div>
    );
}

export default App;
