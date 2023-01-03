import React from "react";
import "../../styles/ImpactPage/Excellence/index.css";

export default function Excellence() {
    return (
        <>
            <main className="excellence container_2">
                <div className="excellence--title">
                    <h1 className="font--h1">Our Execellences In Numbers</h1>
                    <p className="font--p">
                        (*data calculated to date in year 2021)
                    </p>
                    <p className="font--p">
                        Thank you for your participation in creating sustainable
                        agriculture with us!
                    </p>
                </div>

                <div className="excellence--cards">
                    <div className="cards--container">
                        <div className="container--image"></div>
                        <div className="container--title">
                            <h2 className="font--h2">±2.000.000</h2>
                            <h4 className="font--h4">Litters</h4>
                        </div>
                        <p className="font--h4">
                            Pesticides that has been reduced
                        </p>
                    </div>
                    <div className="cards--container">
                        <div className="container--image"></div>
                        <div className="container--title">
                            <h2 className="font--h2">&#62;5.500</h2>
                            <h4 className="font--h4">Sprayers</h4>
                        </div>
                        <p className="font--h4">
                            Reduced exposures to Pesticides
                        </p>
                    </div>
                    <div className="cards--container">
                        <div className="container--image"></div>
                        <div className="container--title">
                            <h2 className="font--h2">±2.000.000</h2>
                            <h4 className="font--h4">USD</h4>
                        </div>
                        <p className="font--h4">
                            Cost saved from using Pesticides
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
