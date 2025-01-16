import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import websiteLogo from "../assets/images/logo.png";

const NavbarMain = () => {
    return (
        <section  className="font-nephilm">
            {/* black - first */}
            <div className="bg-main-dark text-main-light flex items-center justify-between pl-[15%] pr-[15%] pt-4 pb-4 max-[1000px]:pl-[7.5%] max-[1000px]:pr-[7.5%] max-[900px]:text-xs max-[500px]:block max-[500px]:justify-center">
                {/* left */}
                <div className="flex items-center justify-start max-[500px]:justify-center max-[500px]:pb-4">
                    <h2><FontAwesomeIcon icon={faPhone} className="text-main-gold cursor-pointer"/> +1 (234) 567 890</h2>
                    <h2 className="pl-4"><FontAwesomeIcon icon={faEnvelopeOpenText} className="text-main-gold cursor-pointer"/> TezeHotel@gmail.com</h2>
                </div>

                {/* right */}
                <div className="text-main-gold flex items-center justify-start max-[500px]:justify-center">
                    <FontAwesomeIcon icon={faFacebookF} onClick={() => {window.location.href="https://www.facebook.com/data.tezela/"}} className="cursor-pointer pr-4 pl-4" />
                    <FontAwesomeIcon icon={faInstagram} onClick={() => {window.location.href="https://www.instagram.com/datatezela/"}} className="cursor-pointer pr-4 pl-4" />
                    <FontAwesomeIcon icon={faYoutube} onClick={() => {window.location.href="https://www.youtube.com/@Goal_Oriented_Academy__GOA"}} className="cursor-pointer pr-4 pl-4" />
                </div>
            </div>

            {/*  main navbar  */}
            <div className="bg-main-light pl-[15%] pr-[15%] pt-3 pb-3 flex items-center justify-between max-[1000px]:pl-[7.5%] max-[1000px]:pr-[7.5%] max-[900px]:text-xs max-[900px]:block">
                <div className="flex items-center justify-start max-[900px]:justify-center">
                    <img src={websiteLogo} alt="website logo" className="w-[50%] cursor-pointer max-[900px]:w-[40%] max-[500px]:pb-5"/>
                </div>

                <div className="flex items-center justify-center max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-4">
                    <span className="pl-6 cursor-pointer hover:font-bold">Home</span>
                    <span className="pl-6 cursor-pointer hover:font-bold">About</span>
                    <span className="pl-6 cursor-pointer hover:font-bold">Rooms</span>
                    <span className="pl-6 cursor-pointer hover:font-bold">Food</span>
                    <span className="pl-6 cursor-pointer hover:font-bold">Reviews</span>
                    <span className="pl-6 cursor-pointer hover:font-bold">Analytics</span>
                    <span className="text-left ml-6 pt-3 pb-3 pl-6 pr-6 bg-main-gold cursor-pointer hover:font-bold max-[500px]:w-max">Book now</span>
                </div>
            </div>
        </section>
    )
}

export default NavbarMain;