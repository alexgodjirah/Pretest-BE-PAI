import React from "react";
import "../../styles/BlogPage/Articles/index.css";

export default function Articles() {
    const articles = [
        {
            id: 1,
            title: "Debungking The Maximum Residues Limits (A Case Study on Coffee)",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 2,
            title: "Pesticide - Will the History Repeat?",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 3,
            title: "Pesticide Residue Level in Chili is High? GAP (Good Agricultural Practice) with Reductant Technology May be an Option for Minimizing this.",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 4,
            title: "The Global Food Crisis: iIs Intercropping an Alternate Solution",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
    ];

    return (
        <>
            <main className="articles container_2">
                <div className="articles--title">
                    <h1 className="font--h1">Articles</h1>
                    <div className="line"></div>
                </div>

                <div className="articles--list">
                    <div className="list--item">
                        {articles.map((e) => (
                            <div className="item--card">
                                <div
                                    className="card--image"
                                    style={{
                                        backgroundImage: `url(${e.url})`,
                                    }}
                                ></div>

                                <div className="card--title">
                                    <h3 className="font--h3">{e.title}</h3>
                                    <p className="font--p">{e.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="list--button">
                        <button className="anchor--button">
                            Older Post &#8594;
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
