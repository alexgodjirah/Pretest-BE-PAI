import React from "react";
import "../../styles/OurSectors/index.css";

export default function OurSectors() {
    return (
        <>
            <main className="fifth_page container_2">
                <h1>Our Sectors</h1>
                <p>
                    From rice to oil palm, from coffee to forestry, and from
                    sugarcane to corn, Pandawa Agri Indonesia aims to offer
                    sustainable agriculture through good agricultural practices
                    that could minimizing noxious agrochemical exposure. This is
                    some of our current sectors that we are in, and it doesn’t
                    stop there.
                </p>
                <div className="fifth_page--images">
                    <div className="image">image1</div>
                    <div className="image">image2</div>
                    <div className="image">image3</div>
                    <div className="image">image4</div>
                    <div className="image">image5</div>
                    <div className="image">image6</div>
                </div>
                <button className="button">Read More</button>
            </main>
        </>
    );
}
