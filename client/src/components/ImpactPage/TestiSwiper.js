import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/ImpactPage/Testimony/TestiSwiper/index.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function TestiSwiper() {
    const testiProfiles = [
        {
            id: 1,
            name: "Frans",
            job: "Coffee Farmer",
            place: "Rimba Candi, Pagar Alam, South Sumatra",
            message: `"I'm very happy with thie product (WS), because from
                            what I know is herbicides can affect coffee flowers
                            and of course the coffee beans themselves if we used
                            too much herbicides. WS redude my herbicides usage
                            up to 50% so it could made my coffee plants
                            healthier and I can save my upkeep cost. This is the
                            second time I have bought WS."`,
        },
        {
            id: 2,
            name: "Giyono",
            job: "Coffee Farmer",
            place: "Talang Ternak Village, Pagar Alam, South Sumatra",
            message: `"I have used WS twice to help control the weeds in my
                        coffee plantation which are diffucult to control
                        without WS. The results are always satisfying; the
                        weeds were gone, just like using herbicides. My
                        herbicides usage and upkeep cost were reduced
                        becuase WS. Ws is so cool!!"`,
        },
        {
            id: 3,
            name: "Ngadini",
            job: "Farmer",
            place: "Sukamulya Village, North Dempo, Pagar Alam, South Sumatra",
            message: `"First time I tried using PS was when I tried to do
                            pests controlled on my cabbage and it works! and
                            also I saw my cabbage grew faster. Now, I use PS on
                            my potato plants too. Alhamdulillah, my potato
                            plants are more controlled than before. More Fresh,
                            healthy and not found any fungi and so do the pests"`,
        },
        {
            id: 4,
            name: "Nur Alam",
            job: "Farmer",
            place: "Tanjung Pring Village, Indralaya, Ogan Ilir, South Sumatra",
            message: `"I remember when first time I used PS was when my
                            capsicum plants were affected by Fusarium.
                            Alhamdulillah, after several sprays with PS mix in
                            my usual insecticide, the plants began healthier.
                            Finally, every time I want to spray my plants, I'm
                            sure to always mix PS with my usual insecticide
                            because it's really helps speed up the control of
                            the disease in my capsicum plants. I always mix PS
                            with my usual insecticide because I can reduce my
                            insecticide dosage so the cost of pest control
                            becomes cheaper"`,
        },
        {
            id: 5,
            name: "Fikri",
            job: "Coffee Farmer",
            place: "Rimba Candi, Pagar Alam, South Sumatra",
            message: `"I pretty much used herbicides on my coffee plant. I
                            feel that many of my coffee plants have broken roots
                            and stems latey. I suspect this is because their
                            often exposed by herbicides that I used. I was
                            introduced to WS by PAI officers, because they said
                            that I can reduced my herbiside dossage an still got
                            the best result if I mix them up with WS. I tried it
                            2 times and I saw my coffee plants are better now.
                            Leaves are not yellow after spraying, more coffee
                            flower blooms and not fall out."`,
        },
        {
            id: 6,
            name: "Wahid",
            job: "Horticuture and Coffee Farmer",
            place: "Rimba Candi, Pagar Alam, South Sumatra",
            message: `"Several times ago, I heard from my friends that
                            there was a training about coffee cultivation
                            techniques held by Pandawa Agri, but unfortunately I
                            haven't had time to take part in the training. My
                            friends who took part in the training told me that
                            there was a mixture for herbicides that could reduce
                            the dose of my herbicide use but the results were
                            still good, the name of the product is WS, one of
                            the Pandawa Agri's product. I was interested then
                            looked and tried WS on my farmland and it turned out
                            satisfying results."`,
        },
        {
            id: 7,
            name: "Edi",
            job: "Coffee Farmer",
            place: "Rimba Candi, Pagar Alam, South Sumatra",
            message: `"I have used WS three times on my coffee farm since
                            I met the PAI officer. Previously when every time I
                            spray my coffee plants with herbicides, I saw the
                            coffee leaves start to turn yellow in the next
                            morning and I start realizing that is because of the
                            herbicide I used (the dosage). I was introduced to
                            WS and since then I can reduced my herbicide usage
                            and mixed it with WS without any hesitation aboud
                            the result (the effication). Alhamdulillah every
                            time I spray now my coffee leaves don't turn
                            yellow."`,
        },
    ];

    const paginationOps = {
        dynamicBullets: true,
        clickable: true,
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                direction="horizontal"
                spaceBetween={10}
                pagination={paginationOps}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                grabCursor={true}
                navigation={true}
                loop={true}
                className="testiSwiper"
                modules={[Pagination, Autoplay, Navigation]}
            >
                {testiProfiles.map((testiProfile) => (
                    <SwiperSlide
                        className="testiSwiper--container"
                        key={testiProfile.id}
                    >
                        <div>
                            <p className="font--h4">{testiProfile.message}</p>
                        </div>

                        <div className="container--footer">
                            <div className="footer--pic"></div>
                            <div className="footer--detail">
                                <h4 className="font--h4">
                                    {testiProfile.name}
                                </h4>
                                <p className="font--p">
                                    {testiProfile.job}, {testiProfile.place}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* <div className="nav">
                <button
                    className="nav--button"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    Prev
                </button>
                <button
                    className="nav--button"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    Next
                </button>
            </div> */}
        </>
    );
}
