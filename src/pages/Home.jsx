import React from "react";
import image1 from "../assets/images/room-main.jpg";
import image2 from "../assets/images/room-second.jpg";

import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <header>
            {/* container */}
            <section className="w-full pl-[15%] pr-[15%] flex items-center justify-between pt-10">
                {/* left */}
                <div className="w-1/2 flex flex-col">
                    <h2 className="text-main-gold text-2xl">TezeHotel</h2>
                    <h1 className="text-7xl max-w-[75%] pt-10 pb-10 cursor-pointer">
                        Welcome to the oasis of luxury & tranquility
                    </h1>
                    <p className="text-main-gray pb-5">
                        Welcome to TezeHotel, a sanctuary of elegance and opulence nestled in the heart of [Location]. Experience unparalleled luxury with our exquisitely designed suites, world-class dining, and personalized service. Indulge in serene spa treatments and breathtaking views, making every moment unforgettable. Your ultimate luxury escape awaits.
                    </p>
                    <span className="pt-3 pb-3 pl-6 pr-6 bg-main-gold w-max cursor-pointer">
                        Discover more
                    </span>
                </div>

                {/* right */}
                <div className="w-[40%]">
                    <Swiper
                      // install Swiper modules
                      modules={[Pagination, Scrollbar, A11y]}
                      spaceBetween={100}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                    >
                      <SwiperSlide>
                          <img src={image1} alt="Room Main" className="h-[1000px]"/>
                      </SwiperSlide>
                      <SwiperSlide>
                          <img src={image2} alt="Room Second" className="h-[1000px]"/>
                      </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </header>
    );
};

export default Home;