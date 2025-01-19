import Room from "../Components/Room";
import roomOneFirst from "../assets/images/room1/room1-bedroom.jpg";
import roomOneSecond from "../assets/images/room1/pool.jpg";
import roomOneThird from "../assets/images/room1/pool2.jpg";
import roomTwoFirst from "../assets/images/room2/room2-main.jpg";
import roomTwoSecond from "../assets/images/room2/room2-second.jpg";
import roomTwoThird from "../assets/images/room2/room2-third.jpg";
import roomThreeFirst from "../assets/images/room3/room3-main.jpg";
import roomThreeSecond from "../assets/images/room3/room3-second.jpg";
import roomThreeThird from "../assets/images/room3/room3-third.jpg";
import roomFourFirst from "../assets/images/room4/room4-main.jpg";
import roomFourSecond from "../assets/images/room4/room4-second.jpg";
import roomFourThird from "../assets/images/room4/room4-third.jpg";


const Rooms = () => {
    return (
        <section className="w-full px-[15%] spacer layer3 max-[1000px]:px-[7.5%]">
            {/* For headers */}
            <div className="flex flex-col items-center justify-center text-center py-10">
                <h2 className="text-main-gold text-xl text-bold uppercase">Our Rooms</h2>
                <h1 className="text-4xl pt-2 tracking-wider">The most comfortable</h1>
            </div>

            {/* For rooms */}
            <div className="py-10 grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
                <Room name="Luxury room" baths="2" beds="2" sqft="1200" text="Luxurious rooms featuring elegant design, premium amenities, plush furnishings, and breathtaking views for ultimate comfort." price="$120" image1 = {roomOneFirst} image2 = {roomOneSecond} image3 = {roomOneThird} />

                <Room name="Business room" baths="1" beds="1" sqft="1400" text="Business rooms offer modern design, advanced technology, ergonomic workspaces, and seamless connectivity for productivity." price="$100" image1 = {roomTwoFirst} image2 = {roomTwoSecond} image3 = {roomTwoThird} />

                <Room name="Villa suit" baths="3" beds="3" sqft="2050" text="Villa Suites boast spacious elegance, private pools, refined decor, and personalized services for ultimate luxury." price="$240" image1 = {roomThreeFirst} image2 = {roomThreeSecond} image3 = {roomThreeThird} />

                <Room name="Couple room" baths="1" beds="1" sqft="1000" text="Couple rooms offer intimate ambiance, cozy décor, romantic features, and a serene, private retreat." price="$140" image1 = {roomFourFirst} image2 = {roomFourSecond} image3 = {roomFourThird} />
            </div>
        </section>
    )
}

export default Rooms;