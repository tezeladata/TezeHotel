import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faExpand } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Room = (props) => {
    const { name, beds, baths, sqft, text, price, image1, image2, image3 } = props;

    return (
        <section className={`w-full flex items-center ${name === "Luxury room" || name === "Villa suit" ? 'justify-end' : 'justify-start'}`}>
            <div className="w-[100%] h-full flex flex-col items-center justify-center">
                {/* Slider */}
                <div className="flex w-full h-[400px]">
                    <Swiper 
                        spaceBetween={20} 
                        navigation={true} 
                        pagination={{ clickable: true }} 
                        loop={true} 
                        modules={[Navigation, Pagination]}
                        className="mySwiper h-full"
                    >
                        <SwiperSlide>
                            <img src={image1} alt="main image" className="object-cover w-full h-full" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={image2} alt="secondary image" className="object-cover w-full h-full" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={image3} alt="third image" className="object-cover w-full h-full" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Main information */}
                <div className="w-full flex flex-col bg-main-gray p-5 text-main-light">
                    <h1 className="text-3xl pb-5 tracking-wider">{name}</h1>

                    <div className="w-full flex items-center justify-start gap-5 pb-5">
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer">
                            <FontAwesomeIcon icon={faBed} className="mr-2 text-main-gold" />
                            {beds} Beds
                        </p>
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer">
                            <FontAwesomeIcon icon={faBath} className="mr-2 text-main-gold" />
                            {baths} Baths
                        </p>
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer">
                            <FontAwesomeIcon icon={faExpand} className="mr-2 text-blue-600" />
                            {sqft} sqft
                        </p>
                    </div>

                    <p className="text-sm max-w-[80%] leading-6">{text}</p>

                    <div className="flex items-center justify-end pr-5 pt-5">
                        <p className="text-base font-bold text-second-gray">
                            <span className="text-main-gold text-2xl pr-5 font-light">{price}</span>
                            / night
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Room;