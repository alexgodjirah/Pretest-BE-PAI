import React from "react";
import "../../styles/ImpactPage/Testimony/index.css";
import TestiSwiper from "./TestiSwiper";

export default function Testimony() {
    return (
        <>
            <main className="testimony container_2">
                <h1 className="font--h1">What They Said</h1>

                {/* Swiper */}
                <div className="testimony--swiper">
                    <TestiSwiper />
                </div>
            </main>
        </>
    );
}
