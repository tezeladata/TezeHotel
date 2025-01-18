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
        <section className="spacer layer2 w-full h-[90vh] px-[15%] flex items-center justify-between max-[1750px]:px-[7.5%] max-[1000px]: max-[1000px]:flex-col-reverse max-[1000px]:justify-start max-[1000px]:pt-[50px] max-[1000px]:h-[100vh] max-[600px]:h-[95vh] max-[400px]:h-[100vh]">
            {/*  left  */}
            <div className="w-7/12 flex items-center justify-start relative max-[1500px]:w-6/12 max-[1000px]:w-[80%] max-[1000px]:my-10 max-[600px]:my-16 max-[600px]:w-[100%]">
                <img src={poolImage} alt="pool image" className="w-full h-auto rounded-2xl shadow-[0px_0px_51px_17px_rgba(138,129,64,1)]"/>

                <div className="absolute w-max h-max text-main-gray bg-main-light text-center z-10 py-6 px-8 bottom-4 left-4 rounded-bl-2xl max-[1500px]:py-3 max-[1500px]:px-4 max-[600px]:bottom-2 max-[600px]:left-2 max-[600px]:py-1.5 max-[600px]:px-2">
                    <h2 className="text-6xl max-[1500px]:text-3xl max-[600px]:text-lg max-[400px]:text-sm">{number} + </h2>
                    <p className="text-xl max-[1500px]:text-base max-[600px]:text-sm max-[400px]:text-xs">Years experience</p>
                </div>
            </div>
            {/*  right  */}
            <div className="pl-16 w-5/12 flex items-start flex-col max-[1500px]:w-6/12 max-[1000px]:w-[100%] max-[1000px]:text-center max-[1000px]:justify-center max-[1000px]:items-center max-[1000px]:px-0">
                <h2 className="uppercase tracking-wide text-main-gold font-bold text-2xl max-[2000px]:text-xl max-[600px]:text-base">About us</h2>
                <h1 className="tracking-wider text-5xl max-w-[85%] py-10 leading-normal max-[2000px]:max-w-[100%] max-[2000px]:py-2 max-[1200px]:text-4xl max-[1200px]:py-5 max-[600px]:text-3xl max-[400px]:py-2 max-[400px]:text-xl">We raise the bar in hotel hospitality</h1>
                <p className="text-main-gray max-w-[80%] text-lg max-[2000px]:text-base max-[1200px]:max-w-[100%] max-[600px]:text-sm">Experience exceptional hospitality, where personalized
                    service and attention to detail create unforgettable, luxurious moments.</p>

                {/*  Container  */}
                <div className="w-[80%] py-10 flex items-center justify-between">
                    <div className="w-1/2 pr-5 max-[500px]:w-full max-[500px]:px-0">
                        <h2 className="text-2xl tracking-wider pb-5 max-[2000px]:text-xl max-[2000px]:pb-2 max-[600px]:text-lg">Our Vision</h2>
                        <p className="text-main-gray text-lg max-[2000px]:text-base max-[600px]:text-sm">Our vision is to create memorable experiences through innovation, excellence, and unmatched hospitality.</p>
                    </div>
                    <div className="h-[200px] w-[1px] bg-main-gray max-[500px]:hidden"></div>
                    <div className="w-1/2 pl-5 max-[500px]:hidden">
                        <h2 className="text-2xl tracking-wider pb-5 max-[2000px]:text-xl max-[2000px]:pb-2 max-[600px]:text-lg">Our Mission</h2>
                        <p className="text-main-gray text-lg max-[2000px]:text-base max-[600px]:text-sm"> Our mission is to deliver exceptional service, ensuring
                            every guest enjoys unforgettable experiences.</p>
                    </div>
                </div>

                <span className="shadow-[0px_0px_11px_3px_rgba(138,129,64,1)] rounded-xl hover:font-bold text-main-light pt-3 pb-3 pl-6 pr-6 bg-main-gold w-max cursor-pointe max-[600px]:text-sm max-[400px]:py-1 max-[400px]:px-2"> Discover more </span>
            </div>
        </section>
    );
};

export default About;