import React from "react";
import image1 from "../assets/images/hotel-main.jpg";
import image2 from "../assets/images/room-main.jpg";
import image3 from "../assets/images/room-second.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <header>
            {/* container */}
            <section className="spacer layer1 w-full h-[90vh] px-[15%] flex items-center justify-between max-[1000px]:px-[7.5%] max-[500px]:block">
                {/* left */}
                <div className="w-1/2 flex flex-col max-[500px]:items-center max-[500px]:w-full max-[500px]:pb-16 max-[500px]:py-[100px]">
                    <h2 className="text-main-dark text-2xl max-[800px]:text-lg">TezeHotel</h2>
                    <h1 className="text-second-dark font-groce text-7xl max-w-[75%] pt-10 pb-10 cursor-pointer max-[1500px]:text-5xl max-[1200px]:text-4xl max-[800px]:text-2xl max-[800px]:py-5 max-[500px]:text-center">
                        Welcome to the oasis of luxury & tranquility
                    </h1>
                    <p className="text-second-gray max-w-[75%] pb-5 max-[800px]:text-sm max-[600px]:text-xs max-[500px]:text-center">
                        Welcome to TezeHotel, a sanctuary of elegance and opulence nestled in the heart of Batumi. Experience unparalleled luxury with our exquisitely designed suites, world-class dining, and personalized service.
                    </p>
                    <span className="shadow-[0px_0px_31px_10px_rgba(138,129,64,1)] rounded-xl hover:font-bold text-main-light pt-3 pb-3 pl-6 pr-6 bg-main-gold w-max cursor-pointe max-[600px]:text-sm">
                        Discover more
                    </span>
                </div>

                {/* right */}
                <div className="flex w-[40%] h-[800px] max-[1500px]:h-[700px] max-[1200px]:h-[500px] max-[800px]:h-[400px] max-[500px]:items-center max-[500px]:w-full max-[500px]:h-[400px]">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="swiper h-full rounded-3xl shadow-[0px_0px_71px_27px_rgba(138,129,64,1)]"
                    >
                        <SwiperSlide>
                            <img src={image2} alt="Room main image" className="object-cover w-full h-full" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image1} alt="Hotel main image" className="object-cover w-full h-full" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image3} alt="Room secondary image" className="object-cover w-full h-full" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </header>
    );
};

export default Home;