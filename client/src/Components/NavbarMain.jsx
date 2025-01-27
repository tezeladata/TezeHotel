import React, {useState, useEffect, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpenText, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import websiteLogo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import {AdminContext} from "../context/AdminContext.jsx";

const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { isLoggedIn } = useContext(AdminContext);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Fetch user login status
        const fetchUserInfo = async () => {
            try {
                const res = await fetch("http://localhost:3000/login/getInfo");

                if (res.ok) {
                    const data = await res.json();
                    setLoggedIn(data.isLoggedIn);
                    setAdmin(data.isAdmin);
                } else {
                    const errorData = await res.json();
                    console.error(errorData.message);
                }
            } catch (err) {
                console.error("Error fetching user info:", err);
            } finally {
                console.log(admin);
                console.log(loggedIn);
            }
        };

        fetchUserInfo();

        return () => window.removeEventListener("resize", handleResize);
      }, [isLoggedIn]);

    const handleChange  = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section className="sticky top-0 z-50">
            {/* black - first */}
            <div className="bg-main-dark text-main-light flex items-center justify-between pl-[15%] pr-[15%] pt-4 pb-4 max-[1000px]:pl-[7.5%] max-[1000px]:pr-[7.5%] max-[900px]:text-xs max-[500px]:block max-[500px]:justify-center">
                {/* left */}
                <div className="flex items-center justify-start max-[500px]:justify-center max-[500px]:pb-4">
                    <h2><FontAwesomeIcon icon={faPhone} className="text-main-gold cursor-pointer" /> +1 (234) 567 890</h2>
                    <h2 className="pl-4"><FontAwesomeIcon icon={faEnvelopeOpenText} className="text-main-gold cursor-pointer" /> TezeHotel@gmail.com</h2>
                </div>

                {/* right */}
                <div className="text-main-gold flex items-center justify-start max-[500px]:justify-center">
                    <FontAwesomeIcon icon={faFacebookF} onClick={() => { window.location.href = "https://www.facebook.com/data.tezela/" }} className="cursor-pointer pr-4 pl-4" />
                    <FontAwesomeIcon icon={faInstagram} onClick={() => { window.location.href = "https://www.instagram.com/datatezela/" }} className="cursor-pointer pr-4 pl-4" />
                    <FontAwesomeIcon icon={faYoutube} onClick={() => { window.location.href = "https://www.youtube.com/@Goal_Oriented_Academy__GOA" }} className="cursor-pointer pr-4 pl-4" />
                </div>
            </div>

            {/* main navbar */}
            <div className={`relative bg-main-light px-[15%]  flex items-center justify-between max-[1000px]:px-[7.5%] max-[900px]:text-xs max-[900px]:block`}>
                {/* Hamburger Menu / Close Icon */}
                <FontAwesomeIcon 
                    icon={isOpen ? faX : faBars} 
                    className={`cursor-pointer absolute top-6 right-6 ${windowWidth <= 500 ? 'block' : 'hidden'}`} 
                    onClick={handleChange} 
                />

                {/* Logo */}
                <div className="flex items-center justify-start max-[900px]:justify-center">
                    <Link to="/">
                        <img src={websiteLogo} alt="website logo" className={`w-[50%] cursor-pointer max-[900px]:w-[40%] max-[500px]:py-3`}/>
                    </Link>
                </div>

                {/* Menu Items */}
                <div
                    className={`flex items-center justify-center text-center max-[500px]:grid-cols-2 max-[500px]:gap-4 
                        ${windowWidth <= 500 ? (isOpen ? 'grid' : 'hidden') : 'flex'}`}
                >
                    <Link to="/">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group"> Home <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span></span>
                    </Link>
                    <Link to="/about">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group">About <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span></span>
                    </Link>
                    <Link to="/rooms">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group">
                            Rooms <span
                            className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link to="/food">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group">
                            Food <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link to="/reviews">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group">
                            Reviews <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link to="/analytics">
                        <span className="ml-6 cursor-pointer max-[500px]:mx-0 relative group">
                            Analytics <span
                            className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span>
                        </span>
                    </Link>
                    {loggedIn === false && (
                        <span className="shadow-[0px_0px_11px_5px_rgba(138,129,64,1)] rounded-xl text-main-light ml-6 my-2 pt-1.5 pb-1.5 pl-3 pr-3 bg-main-gold cursor-pointer hover:font-bold max-[500px]:w-max max-[500px]:[grid-area:4/1/5/3] max-[500px]:justify-self-center max-[500px]:mx-0">
                            <Link to="/register">Register</Link>
                        </span>
                    )}
                    {(loggedIn === true && admin === false) && (
                        <span
                            className="shadow-[0px_0px_11px_5px_rgba(138,129,64,1)] rounded-xl text-main-light ml-6 my-2 pt-1.5 pb-1.5 pl-3 pr-3 bg-main-gold cursor-pointer hover:font-bold max-[500px]:w-max max-[500px]:[grid-area:4/1/5/3] max-[500px]:justify-self-center max-[500px]:mx-0">
                            <Link to="/bookNow">Book now</Link>
                        </span>
                    )}
                    {(loggedIn === true && admin === true) && (
                        <span
                            className="shadow-[0px_0px_11px_5px_rgba(138,129,64,1)] rounded-xl text-main-light ml-6 my-2 pt-1.5 pb-1.5 pl-3 pr-3 bg-main-gold cursor-pointer hover:font-bold max-[500px]:w-max max-[500px]:[grid-area:4/1/5/3] max-[500px]:justify-self-center max-[500px]:mx-0">
                            <Link to="/reservations">Admin panel</Link>
                        </span>
                    )}
                </div>
            </div>
        </section>
    );
}

export default NavbarMain;