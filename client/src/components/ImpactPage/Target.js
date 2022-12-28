import React from "react";
import "../../styles/ImpactPage/Target/index.css";

export default function Target() {
    return (
        <>
            <main className="target container_2">
                <div className="target--text">
                    <h1 className="font--h1">Our Target</h1>
                    <p className="font--h4">
                        Pandawa Agri Indonesia is a companu specializing in the
                        creation of environmentally friendly and sustainable
                        agricultural product innovations. We are committed to
                        creating a beneficial influence on the lives of farmer,
                        the environment, and the plants themselves. Our
                        expectations for improved sustainable agriculture during
                        the following years are as follows:
                    </p>
                </div>
                <div className="target--cards">
                    <div className="cards--container">
                        <h2 className="font--h2">
                            Reduce More Pesticides & Residues
                        </h2>
                        <button className="button">Find Out More</button>
                    </div>
                    <div className="cards--container">
                        <h2 className="font--h2">
                            Help More Farmers Become Healthier
                        </h2>
                        <button className="button">Find Out More</button>
                    </div>
                    <div className="cards--container">
                        <h2 className="font--h2">
                            Reach More Farmers and Plantations
                        </h2>
                        <button className="button">Find Out More</button>
                    </div>
                    <div className="cards--container">
                        <h2 className="font--h2">
                            Saving More Pesticides Cost
                        </h2>
                        <button className="button">Find Out More</button>
                    </div>
                </div>
            </main>
        </>
    );
}
