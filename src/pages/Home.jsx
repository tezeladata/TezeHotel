import React, { useEffect, useState, useRef } from "react";
import image1 from "../assets/images/hotel-main.jpg";
import image2 from "../assets/images/room-main.jpg";
import image3 from "../assets/images/room-second.jpg";
import image4 from "../assets/images/balcony-main.jpg";
import image5 from "../assets/images/balcony-second.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {
    const [years, setYears] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [customers, setCustomers] = useState(1);
    const [staff, setStaff] = useState(1);

    const statsRef = useRef(null);

    useEffect(() => {
        const createInterval = (setter, max, delay) => {
            const interval = setInterval(() => {
                setter(prevNumber => {
                    if (prevNumber < max) {
                        return prevNumber + 1;
                    }
                    clearInterval(interval);
                    return prevNumber;
                });
            }, delay);
            return interval;
        };

        const startCounting = () => {
            const intervals = [
                createInterval(setYears, 12, 200),
                createInterval(setRooms, 105, 20),
                createInterval(setCustomers, 34, 100),
                createInterval(setStaff, 485, 5)
            ];

            return () => intervals.forEach(clearInterval);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCounting();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <header className="flex flex-col spacer layer1">
            {/* container */}
            <section className="w-full px-[15%] py-10 flex items-center justify-between max-[1000px]:px-[7.5%] max-[500px]:block">
                {/* left */}
                <div className="w-1/2 flex flex-col max-[500px]:items-center max-[500px]:w-full max-[500px]:pb-16 max-[500px]:pt-[50px]">
                    <h2 className="text-main-dark text-2xl max-[800px]:text-lg">TezeHotel</h2>
                    <h1 className="font-bold text-main-dark font-winslowBook text-7xl max-w-[75%] pt-10 pb-10 cursor-pointer max-[1500px]:text-5xl max-[1200px]:text-4xl max-[800px]:text-2xl max-[800px]:py-5 max-[500px]:text-center max-[500px]:text-4xl">
                        Welcome to the oasis of luxury & tranquility
                    </h1>
                    <p className="text-second-gray max-w-[75%] pb-5 max-[800px]:text-sm max-[600px]:text-xs max-[500px]:text-center">
                        Welcome to TezeHotel, a sanctuary of elegance and opulence nestled in the heart of Batumi. Experience unparalleled luxury with our exquisitely designed suites, world-class dining, and personalized service.
                    </p>
                    <span className="cursor-pointer shadow-[0px_0px_11px_5px_rgba(138,129,64,1)] rounded-xl hover:font-bold text-main-light pt-3 pb-3 pl-6 pr-6 bg-main-gold w-max cursor-pointe max-[600px]:text-sm">
                        Discover more
                    </span>
                </div>

                {/* right */}
                <div className="flex w-[50%] h-[600px] max-[1500px]:h-[700px] max-[1200px]:h-[500px] max-[800px]:h-[400px] max-[500px]:items-center max-[500px]:w-[100%] max-[500px]:h-[800px]">
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="swiper h-full rounded-3xl shadow-[0px_0px_71px_27px_rgba(138,129,64,1)] max-[500px]:h-[60%]">
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

            <section className="w-full px-[15%] py-32 flex flex-col items-center justify-between max-[1000px]:px-[7.5%] max-[500px]:py-8" ref={statsRef}>
                {/*  first  */}
                <div className="w-full">
                    <h2 className="text-main-dark text-5xl max-w-[50%] leading-tight font-bold max-[1800px]:max-w-[100%] max-[1500px]:text-4xl max-[1300px]:text-center max-[1000px]:text-3xl max-[400px]:text-2xl">
                        TezeHotel is a peaceful paradise for you to relax and rest your soul.
                    </h2>

                    <div className="w-full py-10 flex items-center justify-between max-[700px]:py-5 max-[500px]:flex-col max-[500px]:gap-6 max-[500px]:py-10">
                        <div className="w-1/2 max-[500px]:w-full">
                            <p className="text-lg text-second-gray max-w-[90%] font-bold max-[1500px]:text-base max-[1300px]:text-left max-[1000px]:text-sm max-[700px]:text-xs max-[500px]:max-w-[100%] max-[500px]:text-center">TezeHotel is your peaceful paradise, offering a
                                serene escape to relax and rejuvenate your soul. Whether you seek solitude or vibrant
                                moments, it's perfect for unwinding, connecting with friends, or enjoying memorable
                                times with your partner or family in a luxurious, tranquil setting.</p>
                        </div>
                        <div className="w-1/2 max-[500px]:w-full">
                            <p className="text-lg text-second-gray max-w-[90%] font-bold max-[1500px]:text-base max-[1300px]:text-right max-[1000px]:text-sm max-[700px]:text-xs max-[500px]:max-w-[100%] max-[500px]:text-center">Discover TezeHotel, a serene haven designed for
                                ultimate relaxation and joyful gatherings. Reconnect with your inner peace, or share
                                unforgettable moments with friends, loved ones, and family. Whether you desire quiet
                                reflection or lively fun, TezeHotel is the perfect retreat for all occasions.</p>
                        </div>
                    </div>

                    <div className="w-full h-[2px] bg-second-gray my-5 max-[1000px]:my-2"></div>
                </div>

                {/*  second  */}
                <div className="w-full flex items-center justify-between text-second-gray max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-6">
                    <div className="py-10 flex flex-col items-center justify-center max-[1000px]:py-2">
                        <h2 className="text-main-dark text-6xl max-[1500px]:text-5xl max-[1000px]:text-3xl max-[700px]:text-xl max-[500px]:text-4xl">{years} + </h2>
                        <p className="text-xl font-bold max-[1000px]:text-base max-[700px]:text-xs">Years Experience</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-main-dark text-6xl max-[1500px]:text-5xl max-[1000px]:text-3xl max-[700px]:text-xl max-[500px]:text-4xl">{rooms} + </h2>
                        <p className="text-xl font-bold max-[1000px]:text-base max-[700px]:text-xs">Rooms Available</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-main-dark text-6xl max-[1500px]:text-5xl max-[1000px]:text-3xl max-[700px]:text-xl max-[500px]:text-4xl">{customers} K+ </h2>
                        <p className="text-xl font-bold max-[1000px]:text-base max-[700px]:text-xs">Happy Customers</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-main-dark text-6xl max-[1500px]:text-5xl max-[1000px]:text-3xl max-[700px]:text-xl max-[500px]:text-4xl">{staff} + </h2>
                        <p className="text-xl font-bold max-[1000px]:text-base max-[700px]:text-xs">Professional Staffs</p>
                    </div>
                </div>

                <div className="w-full h-[2px] bg-second-gray my-5"></div>

                {/*  third  */}
                <div className="flex items-center gap-6 justify-center pt-6 max-[500px]:flex-col">
                    <div className="w-1/2 max-[500px]:w-full">
                        <img src={image5} alt="balcony main image" className="cursor-pointer object-cover h-[600px] shadow-[0px_0px_31px_7px_rgba(138,129,64,1)] max-[1300px]:h-[500px] max-[700px]:h-[400px]"/>
                    </div>

                    <div className="w-1/2 max-[500px]:w-full">
                        <img src={image4} alt="balcony second image" className="cursor-pointer object-cover h-[600px] shadow-[0px_0px_31px_7px_rgba(138,129,64,1)] max-[1300px]:h-[500px] max-[700px]:h-[400px]"/>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Home;