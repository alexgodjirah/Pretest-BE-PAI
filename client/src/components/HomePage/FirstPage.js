import React from "react";
import Navbar from "../Navbar";
import "../../styles/FirstPage/index.css";

export default function FirstPage() {
    return (
        <>
            <main className="first_page container">
                <div className="first_page--title">
                    <h1>PANDAWA AGRI INDONESIA</h1>
                </div>

                <div className="first_page--line"></div>

                <div className="first_page--paragraph">
                    <p>
                        "Entering the 21st century, the world community is
                        starting to become aware of reducing the use of
                        pesticides in agriculture
                    </p>
                </div>
            </main>
        </>
    );
}
