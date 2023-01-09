import React from "react";
import "../../styles/CareerPage/Value/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

export default function Value() {
    const values = [
        {
            id: 1,
            title: "Agile",
            desc: "In a fast-paced environment where changing trends and consumer sentiment are the norms, significant disruption is not only to be expected but embraces. In agile business culture, uncertainty can be handled more efficiently by a team that is naturally more adaptive, flexible and innovative.",
            icon: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            image: "https://via.placeholder.com/600x400/99991d/a81b8c",
        },
        {
            id: 2,
            title: "Courage",
            desc: "Courage is you can say what you want to say. You can frankly give others feedback, input, or something like that decently. You can deliver bad news fast. You can implement your idea even it didn't work and you can learn from it. Without courage, all seems fake, everything looks OK while it doesn't.",
            icon: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            image: "https://via.placeholder.com/600x400/99991d/a81b8c",
        },
        {
            id: 3,
            title: "Continous Improvement",
            desc: "Many small continuous changes in the systems and policies bring effective results than few major changes. Continuous improvement gives the organization a framework for reaching the next level of excellence.",
            icon: "https://cdn.discordapp.com/attachments/539590616460296203/911919806276579368/main-bg.jpg",
            image: "https://via.placeholder.com/600x400/99991d/a81b8c",
        },
    ];

    return (
        <>
            <main className="value container_2">
                <div className="value--title">
                    <h1 className="font--h1">Value</h1>
                    <h4 className="font--h4">What PAI Stands For</h4>
                    <div className="line"></div>
                </div>

                <div className="value--carousel">
                    <Swiper
                        direction="horizontal"
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="value-swiper"
                    >
                        {values.map((value) => (
                            <SwiperSlide
                                key={value.id}
                                className="carousel--item"
                            >
                                <div className="item--container">
                                    <div className="container--text">
                                        <div className="text--title">
                                            <img
                                                src={`${value.icon}`}
                                                className="title--icon"
                                            />
                                            <h2 className="font--h2">
                                                {value.title}
                                            </h2>
                                        </div>
                                        <h4 className="font--h4">
                                            {value.desc}
                                        </h4>
                                    </div>

                                    <div className="container--image">
                                        <img src={`${value.image}`} />
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
