import React from "react";
import "../../styles/AboutPage/AboutPAI/index.css";

export default function AboutPAI() {
    return (
        <>
            <main className="about_pai container_2">
                <div className="about_pai--text">
                    <h2 className="font--h2">About Pandawa Agri Indonesia</h2>

                    <p className="font--h4">
                        Pandawa Agri Indonesia is the first life science-based
                        company from Indonesia and currently the only company
                        that has{" "}
                        <b>
                            innovation in the development of pesticide reduction
                            products (pesticide reductant)
                        </b>
                        . Starting from this innovation, Pandawa Agri Indonesia
                        is committed to helping agricultural businesses to
                        create an agriculture practices that is sustainable,
                        environmentally friendly, safe for users, and also
                        cost-efficient.
                    </p>
                </div>

                <div className="about_pai--icons">
                    <div className="icons--social">yt</div>
                    <div className="icons--social">in</div>
                    <div className="icons--social">ig</div>
                    <div className="icons--social">fb</div>
                    <div className="icons--social">tw</div>
                </div>
            </main>
        </>
    );
}
