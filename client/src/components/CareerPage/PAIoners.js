import React from "react";
import "../../styles/CareerPage/PAIoneers/index.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function PAIoners() {
    const paioneers = [
        {
            id: 1,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"Imagine you are working with people who have the same vision, supporting each other, and value your strengths. It's awesome!"`,
            name: "Prabawati Hyunita",
            position: "Research and Development",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"I feel like I've found an environment that makes me feel healthier both physically and mentally while I'm working in here. Supportive, transparent, and open-minded co-workers make me friends with people who are super positive. Supported by founders who don't mind mingling with their employees on casual occasions making the working environment here even better. To be honest, this is a very positive place to work and thrive. "`,
            name: "Melda Anggra Puspita",
            position: "Operational",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"While at PAI, I feel lucky to be able to meet great people. The work environment has also helped me a lot in adapting. Besides that, I also had many opportunities to learn and try new things here. Learn more about the world of agriculture, business, finance, and also Human Emotions."`,
            name: "Rio Bayu",
            position: "Production",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"It is great to be able to work at Pandawa Agri Indonesia. I can learn a lot about agricultural and environmental problems as well as solutions to overcome them. Everyone here supports each other and assists to achieve the intended targets."`,
            name: "Yusuf Ali",
            position: "Creative Strategist",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"I think PAI is different from other life science-based companies. We carry out our roles in a free and responsible manner, free to improvise to achieve company goals. Keep prioritizing the results without forgetting the process, all done transparently. Collaborate without feeling awkward about the work structure. Strongly prioritizes the needs of employees that are usually a barrier for employees to work comfortably."`,
            name: "Ahmad Surkati",
            position: "Area Sales",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/600x400/969696/f00000",
            quote: `"The company is still relatively new, but I have learned a lot about product development that most customers don't know about, so it becomes a great challenge for me to explain and provide evidence of the results of our products. The work atmosphere is great and impressive, maybe it because the average age of the employees is still relatively young, so the communication quickly connects."`,
            name: "Arya Darmansyah",
            position: "Customer Success",
        },
    ];

    return (
        <>
            <main className="paioneers container_2">
                <div className="paioneers--title">
                    <h1 className="font--h1">Hear From Our #PAIoneers</h1>
                    <h4 className="font--h4">
                        What it feels like to work at Pandawa Agri Indonesia
                    </h4>
                    <div className="line"></div>
                </div>

                <div className="paioneers--carousel">
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
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        grabCursor={true}
                        loop={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="paioneers--swiper"
                    >
                        {paioneers.map((paioneer) => (
                            <SwiperSlide
                                key={paioneer.id}
                                className="carousel--container"
                            >
                                <div className="container">
                                    <div className="carousel--image">
                                        <img
                                            src={paioneer.image}
                                            className="image--icon"
                                        />
                                    </div>
                                    <div className="carousel--text">
                                        <h4 className="font--h4">
                                            {paioneer.quote}
                                        </h4>
                                        <div className="text--title">
                                            <p className="font--p title--name">
                                                {paioneer.name}
                                            </p>
                                            <p className="font--p title--position">
                                                {paioneer.position}
                                            </p>
                                        </div>
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
