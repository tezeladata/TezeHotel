import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imageOne from "../assets/images/customers/img.png";
import imageTwo from "../assets/images/customers/img_1.png";
import imageThree from "../assets/images/customers/img_2.png";

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    const customers = [
        {name: "Amanda Waller", text: "TezeHotel exceeded all my expectations! The staff was attentive, and the rooms were pure luxury. I loved the serene ambiance and the delightful dining options. Perfect for relaxation and indulgence. Highly recommend!", image: imageOne},
        {name: "Hans Ramoray", text: "My stay at TezeHotel was unforgettable. The spacious business rooms had everything I needed for work, and the dining was phenomenal. A perfect balance of luxury and functionality. I’ll definitely return soon!", image: imageTwo},
        {name: "Linda Panson", text: "TezeHotel was a dream! The villa suite was stunning, with breathtaking views and impeccable service. The spa was heavenly, and every detail was carefully thought out. It’s the perfect retreat for anyone seeking luxury!", image: imageThree}
    ]

    if (isLoading) {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <section className="layer5 spacer w-screen min-h-[120vh] flex flex-col items-center justify-center px-[15%] py-10 max-[1000px]:px-[7.5%]">
            {/*  Headings  */}
            <div className="w-full flex flex-col items-start justify-center py-10 max-[1000px]:items-center">
                <h2 className="text-3xl font-bold text-main-gold tracking-widest py-5 max-[900px]:text-2xl max-[500px]:text-lg max-[500px]:py-2">Testimonials</h2>
                <h1 className="font-bold text-7xl py-5 max-[1400px]:text-6xl max-[900px]:text-4xl max-[600px]:text-3xl max-[500px]:text-2xl max-[500px]:py-2">Review from our customers</h1>

                {/*  stars  */}
                <div className="flex items-center justify-start gap-6 py-6 max-[500px]:py-2 max-[500px]:gap-0">
                    {[1, 2, 3, 4, 5].map(i => {
                        return (
                            <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl max-[900px]:pr-1 max-[500px]:text-base max-[500px]:p-0" />
                        )
                    })}
                    <span className="text-2xl font-bold max-[500px]:pl-2">5.0/5.0</span>
                </div>
            </div>

            {/* Slider */}
            <div className="flex w-full py-10">
                <Swiper spaceBetween={20} slidesPerView={windowWidth >= 1000 ? 2 : 1} pagination={{ clickable: true }} loop={true} modules={[Navigation, Pagination]} className="mySwiper h-full">
                    {customers.map((customer) => (
                        <SwiperSlide key={customer.name} className="p-10 bg-third-gray">
                            <div className="pb-5">
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                            </div>

                            <p className="text-xl py-5 max-w-[90%] text-main-light max-[600px]:text-base max-[500px]:text-sm">"{customer.text}"</p>

                            <div className="flex items-center justify-start gap-6 py-5">
                                <div>
                                    <img src={customer.image} alt="customer image" className="w-[100px] h-auto rounded-full max-[700px]:w-[75px] max-[500px]:w-[60px]"/>
                                </div>

                                <div>
                                    <h2 className="font-bold text-4xl text-main-light max-[1200px]:text-3xl max-[700px]:text-2xl max-[500px]:text-xl max-[400px]:text-lg">{customer.name}</h2>
                                    <span className="text-2xl text-main-dark font-black max-[700px]:text-lg">Customer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;