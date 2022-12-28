import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/ImpactPage/ToWorld/index.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function ToWorld() {
    const paginationOps = {
        dynamicBullets: true,
        clickable: true,
    };

    return (
        <>
            <main className="to_world container_2">
                <div className="to_world--title">
                    <h1 className="font--h1">From Banyuwangi to The World</h1>
                    <p className="font--p">
                        The farmers who have been participated in conducting
                        sustainable farming with us for Indonesia, for the World
                    </p>
                </div>

                <div className="to_world--swiper">
                    <Swiper
                        slidesPerView={1}
                        direction="horizontal"
                        spaceBetween={10}
                        pagination={paginationOps}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        navigation={true}
                        loop={true}
                        className="to_world_swiper"
                        modules={[Pagination, Autoplay, Navigation]}
                    >
                        <SwiperSlide className="font--h3">1</SwiperSlide>
                        <SwiperSlide className="font--h3">2</SwiperSlide>
                        <SwiperSlide className="font--h3">3</SwiperSlide>
                        <SwiperSlide className="font--h3">4</SwiperSlide>
                    </Swiper>
                </div>
            </main>
        </>
    );
}
