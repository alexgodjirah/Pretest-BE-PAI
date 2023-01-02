import React from "react";
import "../../styles/SectorsPage/ListenLearn/index.css";

export default function ListenLearn() {
    const cards = [
        {
            id: 1,
            title: "Palm Oil",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
        {
            id: 2,
            title: "Coffee",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
        {
            id: 3,
            title: "Rice",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
        {
            id: 4,
            title: "Corn",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
        {
            id: 5,
            title: "Sugar Cane",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
        {
            id: 6,
            title: "Forestry",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et alias et consequuntur! Ea inventore, quisquam ad eaque quaerat deserunt...",
        },
    ];

    return (
        <>
            <main className="listen_learn container_2">
                <div className="listen_learn--text">
                    <h1 className="font--h1">Listen and Learn</h1>
                    <div className="line"></div>
                    <p className="font--p">
                        Pandawa Agri Indonesia tries to listen and understand
                        what farmers and stakeholders really need. Doing so will
                        allow us to learn and provide the best solution for
                        their problems.
                    </p>
                </div>

                <div className="listen_learn--images">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            style={{
                                backgroundImage: `url(${card.url})`,
                            }}
                            className="images--container"
                        >
                            <h2 className="font--h2">{card.title}</h2>
                            <div className="hide hover--content">
                                <h3 className="font--h3">{card.title}</h3>
                                <p className="font--p">{card.description}</p>
                                <button className="button-subs">
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
