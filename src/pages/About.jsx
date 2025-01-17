import React, { useEffect, useState } from "react";
import poolImage from "../assets/images/pool.jpg"

const About = () => {
    const [number, setNumber] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => {
                if (prevNumber < 12) {
                    return prevNumber + 1;
                }
                clearInterval(interval);
                return prevNumber;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="spacer layer2 w-full h-[90vh] px-[15%] flex items-center justify-between max-[1000px]:px-[7.5%]">
            {/*  left  */}
            <div className="w-7/12 flex items-center justify-start relative">
                <img src={poolImage} alt="pool image" className="w-full h-auto rounded-2xl shadow-[0px_0px_51px_17px_rgba(138,129,64,1)]"/>

                <div className="absolute w-max h-max text-main-gray bg-main-light text-center z-10 py-6 px-8 bottom-4 left-4 rounded-bl-2xl">
                    <h2 className="text-6xl">{number} + </h2>
                    <p className="text-xl">Years experience</p>
                </div>
            </div>
            {/*  right  */}
            <div className="pl-16 w-5/12 flex items-start flex-col">
                <h2 className="uppercase tracking-wide text-main-gold font-bold text-2xl">About us</h2>
                <h1 className="tracking-wider text-6xl max-w-[85%] py-10 leading-normal">We raise the bar in hotel hospitality</h1>
                <p className="text-main-gray max-w-[80%] text-lg">Experience exceptional hospitality, where personalized
                    service and attention to detail create unforgettable, luxurious moments.</p>

                {/*  Container  */}
                <div className="w-[80%] py-10 flex items-center justify-between">
                    <div className="w-1/2 pr-5">
                        <h2 className="text-2xl tracking-wider pb-5">Our Vision</h2>
                        <p className="text-main-gray text-lg">Our vision is to create memorable experiences through innovation, excellence, and unmatched hospitality.</p>
                    </div>
                    <div className="h-[200px] w-[1px] bg-main-gray "></div>
                    <div className="w-1/2 pl-5">
                        <h2 className="text-2xl tracking-wider pb-5">Our Mission</h2>
                        <p className="text-main-gray text-lg"> Our mission is to deliver exceptional service, ensuring
                            every guest enjoys unforgettable experiences.</p>
                    </div>
                </div>

                <span className="shadow-[0px_0px_11px_3px_rgba(138,129,64,1)] rounded-xl hover:font-bold text-main-light pt-3 pb-3 pl-6 pr-6 bg-main-gold w-max cursor-pointe max-[600px]:text-sm"> Discover more </span>
            </div>
        </section>
    );
};

export default About;