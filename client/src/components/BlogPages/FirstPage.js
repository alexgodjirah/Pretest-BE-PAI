import React from "react";
import "../../styles/BlogPage/FirstPage/index.css";

export default function FirstPage() {
    return (
        <>
            <main className="blog--first_page">
                <div className="first_page--content container">
                    <div className="content--title container_2">
                        <h1 className="font--h1">
                            Solut-ion To Reduce Pesticide
                        </h1>
                    </div>
                    <div className="content--search container_2">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="search--input"
                        />
                        <button className="search--button">
                            &#x1F50D;&#xFE0E;
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
