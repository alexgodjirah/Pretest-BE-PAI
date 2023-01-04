import React from "react";
import "../../styles/CareerPage/FirstPage/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

export default function FirstPage() {
    const images = [
        {
            id: 1,
            url: "https://via.placeholder.com/600x400/969696/f00000",
        },
        {
            id: 2,
            url: "https://via.placeholder.com/600x400/00bf8c/00b4bd",
        },
        {
            id: 3,
            url: "https://via.placeholder.com/600x400/99991d/a81b8c",
        },
    ];

    return (
        <>
            <main className="career--first_page">
                <div className="first_page--content container">
                    <div className="content--left">
                        <div className="left--title container_2">
                            <h1 className="font--h1">
                                Hola, <br /> PAIoneers Rookie!
                            </h1>
                            <h3 className="font--h3">
                                Find Your Greatest Strength!
                            </h3>
                        </div>
                        <div className="left--search container_2">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="search--input"
                            />
                            <button className="search--button">
                                &#x1F50D;&#xFE0E;
                            </button>
                        </div>
                    </div>

                    <div className="content--right">
                        <Swiper
                            direction="horizontal"
                            slidesPerView={1}
                            spaceBetween={10}
                            effect="fade"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            fadeEffect={{
                                crossFade: true,
                            }}
                            loop={true}
                            className="image--swiper"
                            modules={[Autoplay, EffectFade]}
                        >
                            {images.map((e) => (
                                <SwiperSlide
                                    key={e.id}
                                    className="swiper--image"
                                    style={{
                                        backgroundImage: `url(${e.url})`,
                                    }}
                                ></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
        </>
    );
}
