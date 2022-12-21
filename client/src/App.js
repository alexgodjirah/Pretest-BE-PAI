import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <nav className="navbar--sticky">
                <Navbar />
            </nav>
            <main>
                <FirstPage />
            </main>
        </div>
    );
}

export default App;
