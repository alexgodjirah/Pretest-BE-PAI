import React from "react";
import "../../styles/CareerPage/Recruitment/index.css";

export default function Recruitment() {
    const steps = [
        {
            id: 1,
            title: "Apply Online",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
        {
            id: 2,
            title: "Screening",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
        {
            id: 3,
            title: "Personality Test",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
        {
            id: 4,
            title: "Interview with POD & User*",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
        {
            id: 5,
            title: "Interview with CEO",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
        {
            id: 6,
            title: "Fun Working Environmernt",
            image: "https://via.placeholder.com/400x500/969696/f00000",
        },
    ];

    return (
        <>
            <main className="recruitment container_2">
                <div className="recruitment--title">
                    <h1 className="font--h1">Our Recruitment Steps</h1>
                    <h4 className="font--h4">
                        Interested in creating sustainable agriculture together
                        as a #PAIoneers? Follow this steps!
                    </h4>

                    <div className="line"></div>
                </div>

                <div className="recruitment--cards">
                    {steps.map((step) => (
                        <div key={step.id} className="cards--container">
                            <img
                                src={`${step.image}`}
                                className="cards--image animation-pulse"
                            />
                            <h3 className="font--h3 cards--title">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="recruitment--note">
                    <p>*Only selected people will be interviewed.</p>
                </div>
            </main>
        </>
    );
}
