import React from "react";
import "../styles/sixthPage/index.css";

export default function SixthPage() {
    const newDate = new Date().toLocaleString("en-US", {
        // weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <main className="sixth_page container_2">
                <h2>Latest News</h2>
                <div className="sixth_page--news">
                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3>Title</h3>
                            <p>
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
                                praesentium? Quaerat fuga, recusandae ab,
                                facilis sapiente delectus molestiae pariatur
                                sunt tenetur nesciunt modi consequuntur soluta
                                ea atque voluptatibus consequatur placeat
                                distinctio quia id dolore. Officia, reiciendis
                                quasi?
                            </p>
                            <div className="card--readmore">
                                <a href="#">READ MORE &#187;</a>
                            </div>
                            <div className="card--footer">
                                <p>{newDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Enim eaque maxime error qui
                                quod tempora itaque, voluptatem veniam aliquid
                                consequuntur libero labore delectus at ab
                                pariatur iste sed perferendis ut.
                            </p>
                            <div className="card--readmore">
                                <a href="#">READ MORE &#187;</a>
                            </div>
                            <div className="card--footer">
                                <p>{newDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="news--card">
                        <div className="card--image"></div>
                        <div className="card--text container">
                            <h3>Title</h3>
                            <p>Hello world</p>
                            <div className="card--readmore">
                                <a href="#">READ MORE &#187;</a>
                            </div>
                            <div className="card--footer">
                                <p>{newDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sixth_page--anchor">
                    <a className="font--paragraph" href="#">
                        &#171; Previous
                    </a>
                    <a className="font--paragraph" href="#">
                        Next &#187;
                    </a>
                </div>
            </main>
        </>
    );
}
