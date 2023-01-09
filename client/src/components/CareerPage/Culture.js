import React from "react";
import "../../styles/CareerPage/Culture/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function Culture() {
    const cultures = [
        {
            id: 1,
            title: "Emphaty",
            desc: "Care not only for result, but do the responsible process to achieve it.",
            Image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 2,
            title: "Be Bold",
            desc: "To make decisions, to own mistakes, to bring constructive argument.",
            Image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 3,
            title: "Active Learner",
            desc: "Always plan 1 step ahead from competition.",
            Image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 4,
            title: "Challenger",
            desc: "Love the challenge, not settle for targets.",
            Image: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 5,
            title: "Diligent",
            desc: "Take extra miles, always prepare.",
            Image: "https://via.placeholder.com/600x400/969696/f00000",
        },
    ];

    return (
        <>
            <main className="culture container_2">
                <div className="culture--title">
                    <h1 className="font--h1">Culture</h1>
                    <h4 className="font--h4">
                        How We Interact With Each Other
                    </h4>
                    <div className="line"></div>
                </div>

                <div className="culture--carousel">
                    <Swiper
                        direction="horizontal"
                        slidesPerView={3}
                        spaceBetween={10}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        grabCursor={true}
                        loop={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="culture--swiper"
                    >
                        {cultures.map((culture) => (
                            <SwiperSlide
                                key={culture.id}
                                className="swiper--carousel"
                            >
                                <div
                                    className="carousel--item"
                                    style={{
                                        backgroundImage: `url(${culture.Image})`,
                                    }}
                                >
                                    <div className="item--text">
                                        <h2 className="font--h2">
                                            {culture.title}
                                        </h2>

                                        <h4 className="font--h4">
                                            {culture.desc}
                                        </h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </>
    );
}
