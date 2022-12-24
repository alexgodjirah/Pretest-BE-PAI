import React from "react";
import "../../styles/AboutPage/Team/index.css";

export default function Team() {
    return (
        <>
            <main className="team container_2">
                <h2 className="font--h2">Our Team</h2>
                <div className="team--pics"></div>
                <div className="team--text">
                    <p className="font--p">
                        Teams with diverse disciplinary backgrounds with
                        specialities in agriculture, biochemistry, weed
                        identification, etc. We work together to provide
                        sustainable solutions for farmers and stakeholders in
                        the agricultural sector.
                    </p>
                    <button className="button">Read More</button>
                </div>
            </main>
        </>
    );
}
