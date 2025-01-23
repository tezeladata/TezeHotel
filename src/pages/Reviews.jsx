import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imageOne from "../assets/images/customers/img.png";
import imageTwo from "../assets/images/customers/img_1.png";
import imageThree from "../assets/images/customers/img_2.png";

const Reviews = () => {
    const customers = [
        {name: "Amanda Waller", text: "TezeHotel exceeded all my expectations! The staff was attentive, and the rooms were pure luxury. I loved the serene ambiance and the delightful dining options. Perfect for relaxation and indulgence. Highly recommend!", image: imageOne},
        {name: "Hans Ramoray", text: "My stay at TezeHotel was unforgettable. The spacious business rooms had everything I needed for work, and the dining was phenomenal. A perfect balance of luxury and functionality. I’ll definitely return soon!", image: imageTwo},
        {name: "Linda Panson", text: "TezeHotel was a dream! The villa suite was stunning, with breathtaking views and impeccable service. The spa was heavenly, and every detail was carefully thought out. It’s the perfect retreat for anyone seeking luxury!", image: imageThree}
    ]
    return (
        <section className="layer5 spacer w-screen min-h-[95vh] flex flex-col items-center justify-center px-[15%] py-10 max-[1000px]:px-[7.5%]">
            {/*  Headings  */}
            <div className="w-full flex flex-col items-start justify-center py-10">
                <h2 className="text-3xl font-bold text-main-gold tracking-widest py-5">Testimonials</h2>
                <h1 className="font-bold text-7xl py-5">Review from our customers</h1>

                {/*  stars  */}
                <div className="flex items-center justify-start gap-6 py-6">
                    <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl" />
                    <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl" />
                    <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl" />
                    <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl" />
                    <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-xl" />
                    <span className="text-2xl font-bold">5.0/5.0</span>
                </div>
            </div>

            {/* Slider */}
            <div className="flex w-full py-10">
                <Swiper spaceBetween={20} slidesPerView={2} pagination={{ clickable: true }} loop={true} modules={[Navigation, Pagination]} className="mySwiper h-full">
                    {customers.map((customer) => (
                        <SwiperSlide key={customer.name} className="p-10 bg-second-gray">
                            <div className="pb-5">
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                                <FontAwesomeIcon icon={faStar} className="cursor-pointer pr-4 text-main-gold text-lg" />
                            </div>

                            <p className="text-3xl py-5 max-w-[90%] text-main-light">"{customer.text}"</p>

                            <div className="flex items-center justify-start gap-6 py-5">
                                <div>
                                    <img src={customer.image} alt="customer image" className="w-[100px] h-auto rounded-full"/>
                                </div>

                                <div>
                                    <h2 className="font-bold text-4xl text-main-light">{customer.name}</h2>
                                    <span className="text-2xl text-main-dark font-black">Customer</span>
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