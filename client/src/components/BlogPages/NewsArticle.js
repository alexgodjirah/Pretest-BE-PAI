import React from "react";
import "../../styles/BlogPage/NewsArticle/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function NewsArticle() {
    const paginationOps = {
        dynamicBullets: true,
        clickable: true,
    };

    const newsArticles = [
        {
            id: 1,
            title: "DEBUKING THE MAXIMUM RESIDUES LIMIT (COFFEE STUDY CASE)",
            desc: "hello world",
            background:
                "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
        },
        {
            id: 2,
            title: "CAN ORGANIC FARMING BE SCALED TO FEED ASIA?",
            desc: "hello world",
            background:
                "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
        },
        {
            id: 3,
            title: "NAGEKEO REGENCY REGIONAL INFLATION CONTROL TEAM (TPID) COLLABORATION THROUGH MBAY NATURAL RICE ECOSYSTEM DEVELOPMENT",
            desc: "hello world",
            background:
                "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
        },
    ];

    return (
        <>
            <main className="news_article container_2">
                <div className="news_article--title">
                    <h1 className="font--h1">News and Article</h1>
                    <div className="line"></div>
                </div>

                <div className="news_article--carousel">
                    <Swiper
                        slidesPerView={1}
                        direction="horizontal"
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        // grabCursor={true}
                        pagination={paginationOps}
                        loop={true}
                        className="news_article_swiper"
                        modules={[Pagination, Autoplay]}
                    >
                        {newsArticles.map((e) => (
                            <SwiperSlide
                                key={e.id}
                                style={{
                                    backgroundImage: `url(${e.background})`,
                                }}
                                className="news_article_swiper_item"
                            >
                                <div className="item_text">
                                    <h2 className="font--h2">{e.title}</h2>
                                    <p className="font--p">{e.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </>
    );
}
