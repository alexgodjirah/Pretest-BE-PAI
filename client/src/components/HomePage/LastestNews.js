import React from "react";
import "../../styles/HomePage/LastestNews/index.css";

export default function LastestNews() {
    const newDate = new Date().toLocaleString("en-US", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <main className="lastest_news container_2">
                <h1 className="font--h1">Latest News</h1>
                <div className="lastest_news--news">
                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3 className="font--h3">Title</h3>
                            <p className="font--p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magnam esse dolores alias
                                sapiente quidem unde sequi excepturi maxime
                                officiis veniam pariatur adipisci obcaecati
                                cupiditate labore maiores eos fugit autem
                                consectetur, est error ex laudantium provident?
                                Officia corrupti quod tempora! Animi blanditiis
                                atque a sed voluptatum omnis totam, similique
                                doloremque ipsam nisi placeat commodi magni
                                neque amet temporibus rerum quae quam. Molestias
                                dolore itaque expedita, aperiam ad repellendus
                                velit amet perferendis, minus consequatur
                                praesentium?
                            </p>
                            <div className="card--readmore">
                                <a href="#" className="font--p">
                                    READ MORE &#187;
                                </a>
                            </div>
                            <div className="card--footer">
                                <p className="font--p">{newDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3 className="font--h3">Title</h3>
                            <p className="font--p">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Enim eaque maxime error qui
                                quod tempora itaque, voluptatem veniam aliquid
                                consequuntur libero labore delectus at ab
                                pariatur iste sed perferendis ut.
                            </p>
                            <div className="card--readmore">
                                <a href="#" className="font--p">
                                    READ MORE &#187;
                                </a>
                            </div>
                            <div className="card--footer">
                                <p className="font--p">{newDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3 className="font--h3">Title</h3>
                            <p className="font--p">Hello world</p>
                            <div className="card--readmore">
                                <a href="#" className="font--p">
                                    READ MORE &#187;
                                </a>
                            </div>
                            <div className="card--footer">
                                <p className="font--p">{newDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lastest_news--anchor">
                    <a className="font--h4" href="#">
                        &#171; Previous
                    </a>
                    <a className="font--h4" href="#">
                        Next &#187;
                    </a>
                </div>
            </main>
        </>
    );
}
