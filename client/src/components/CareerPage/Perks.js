import React from "react";
import "../../styles/CareerPage/Perks/index.css";

export default function Perks() {
    const perks = [
        {
            id: 1,
            title: "Health Insurance",
            image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 2,
            title: "Freedom and Responsibility",
            image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 3,
            title: "Career and Self-Development",
            image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 4,
            title: "Fun Working Environmernt",
            image: "https://via.placeholder.com/600x400/969696/f00000",
        },
    ];

    return (
        <>
            <main className="perks container_2">
                <div className="perks--title">
                    <h1 className="font--h1">The Perks of Working at PAI</h1>
                    <h4 className="font--h4">
                        Our employees well-being is important to us and
                        essential to our capacity to do extraordinary things. We
                        offer programs to support the health, wellness, and
                        financial security of our employees
                    </h4>
                    <div className="line"></div>
                </div>

                <div className="perks--cards">
                    {perks.map((perk) => (
                        <div key={perk.id} className="cards--container">
                            <img
                                src={`${perk.image}`}
                                className="cards--image animation-pulse"
                            />
                            <h3 className="font--h3 cards--title">
                                {perk.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
