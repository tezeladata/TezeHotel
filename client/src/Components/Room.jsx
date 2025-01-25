import '../index.css'; // Assuming you saved the CSS in Room.css

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
        <section className={`w-full flex items-center ${name === "Luxury room" || name === "Villa suit" ? 'justify-end' : 'justify-start'} max-[700px]:justify-center`}>
            <div className="w-[90%] h-[90%] flex flex-col items-center justify-center max-[1000px]:w-full max-[700px]:w-[70%] max-[500px]:w-[90%]">
                {/* Slider */}
                <div className="flex w-full h-[300px] max-[800px]:h-[250px] max-[400px]:h-[200px]">
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
                    <h1 className="text-3xl pb-5 tracking-wider max-[1400px]:text-center max-[800px]:text-2xl max-[800px]:pb-2">{name}</h1>

                    <div className="w-full flex items-center justify-start gap-5 pb-5 max-[1400px]:grid max-[1400px]:grid-cols-2 max-[1200px]:pb-0 max-[800px]:gap-2">
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer max-[1400px]:justify-center max-[800px]:text-xs max-[800px]:px-3">
                            <FontAwesomeIcon icon={faBed} className="mr-2 text-main-gold" />
                            {beds} {beds > 1 ? "beds" : "bed"}
                        </p>
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer max-[1400px]:justify-center max-[800px]:text-xs max-[800px]:px-3">
                            <FontAwesomeIcon icon={faBath} className="mr-2 text-main-gold" />
                            {baths} {baths > 1 ? "baths" : "bath"}
                        </p>
                        <p className="text-sm bg-main-dark py-2 px-6 rounded-3xl flex items-center cursor-pointer max-[1400px]:col-span-2 max-[1400px]:justify-self-center max-[800px]:text-xs max-[800px]:px-3">
                            <FontAwesomeIcon icon={faExpand} className="mr-2 text-blue-600" />
                            {sqft} sqft
                        </p>
                    </div>

                    <p className="text-sm max-w-[80%] leading-6 max-[1400px]:max-w-max max-[1400px]:text-center max-[1400px]:py-5 max-[1200px]:py-2 max-[800px]:text-xs">{text}</p>

                    <div className="flex items-center justify-end pr-5 pt-5">
                        <p className="text-base font-bold text-main-dark max-[800px]:text-sm">
                            <span className="text-main-gold text-2xl pr-5 font-light max-[800px]:text-xl">{price}</span>
                            / night
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Room;