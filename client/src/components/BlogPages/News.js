import React from "react";
import "../../styles/BlogPage/News/index.css";

export default function News() {
    const news = [
        {
            id: 1,
            title: "Nagekeo Regency Regional Inflatio Control Team (TPID) Collaboration through Mbay Natural Rice Ecosystem Development.",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 2,
            title: "Can Organic Farmin Be Scaled to Feed Asia?",
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 3,
            title: `Counterthesis: Agritech Founder, Kuku Roxa, on Why Organic Farming Can't be Scaled in Asia's Developing Countries.`,
            url: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        },
        {
            id: 4,
            title: `Pandawa Agri Indonesia Builds Sustainable Agricultural Ecosystems - Impact Report.`,
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
            <main className="news container_2">
                <div className="news--title">
                    <h1 className="font--h1">News</h1>
                    <div className="line"></div>
                </div>

                <div className="news--list">
                    <div className="list--item">
                        {news.map((e) => (
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
