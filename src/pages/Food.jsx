import React, { useEffect, useState } from "react";
import imageMain from "../assets/images/chef-second.jpg";
import imageSecondary from "../assets/images/chef-main.jpg";

const Food = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
      { heading: "Wagyu Beef Steak", text: "Grilled to perfection with truffle-infused mashed potatoes." },
      { heading: "Lobster Thermidor", text: "Classic lobster dish with creamy mustard and cognac sauce." },
      { heading: "Foie Gras", text: "Pan-seared with caramelized apples and brioche toast." },
      { heading: "Black Truffle Risotto", text: "Creamy Arborio rice infused with rich black truffles." },
      { heading: "Caviar and Blinis", text: "Premium sturgeon caviar served with traditional accompaniments." },
      { heading: "Oysters Rockefeller", text: "Fresh oysters baked with a buttery, herbed topping." },
      { heading: "King Crab Legs", text: "Served with garlic butter and a tangy lemon aioli." },
      { heading: "Duck à l’Orange", text: "Roasted duck with a zesty orange glaze." },
      { heading: "Tuna Tartare", text: "Fresh ahi tuna, avocado, and citrus soy dressing." },
      { heading: "Chilean Sea Bass", text: "Pan-seared with miso glaze and bok choy." },
      { heading: "Beef Wellington", text: "Filet mignon wrapped in puff pastry with mushroom duxelles." },
      { heading: "Coq au Vin", text: "French-style chicken braised in red wine with pearl onions and mushrooms." },
      { heading: "Lamb Rack", text: "Herb-crusted lamb rack with rosemary jus and potato gratin." },
      { heading: "Seafood Paella", text: "A luxurious take with saffron rice, lobster, shrimp, and mussels." },
      { heading: "Chocolate Fondant", text: "Warm chocolate cake with a gooey center, served with vanilla bean ice cream." }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <section className="layer4 spacer w-screen px-[15%] py-10 flex items-center justify-between max-[1000px]:px-[7.5%] max-[1000px]:h-[130vh]">
        {/*  container  */}
        <div className="w-full flex items-center gap-12 max-[1000px]:flex-col-reverse">
          <div className="w-5/12 relative max-[1200px]:w-7/12 max-[1000px]:w-full max-[1000px]:py-16 max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center">
            <img src={imageMain} alt="main chef image" className="w-full h-auto shadow-[0px_0px_71px_7px_rgba(138,129,64,1)] max-[1000px]:w-[50%] max-[500px]:w-[70%]"/>
            <img src={imageSecondary} alt="second chef image" className="absolute w-[30%] h-auto left-[-15%] bottom-[-10%] border-8 border-main-gold shadow-[0px_0px_71px_27px_rgba(138,129,64,1)] max-[1000px]:hidden"/>
          </div>

          <div className="w-7/12 flex flex-col max-[1200px]:w-5/12 max-[1000px]:pt-[100px] max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:text-center max-[700px]:py-0">
            <h2 className="text-main-light font-bold uppercase tracking-widest text-xl max-[500px]:text-lg">
              Our restaurant
            </h2>
            <h1 className="py-5 text-7xl max-w-[80%] font-semibold leading-tight max-[1700px]:text-5xl max-[1200px]:max-w-[100%] max-[1200px]:text-4xl max-[1000px]:text-5xl max-[700px]:text-4xl max-[500px]:text-3xl max-[400px]:text-2xl">
              Enjoy the best food cooked by our professional chefs
            </h1>
            <p className="py-5 text-lg text-main-gray font-bold max-w-[80%] max-[1200px]:max-w-[100%] max-[1200px]:text-base max-[1000px]:text-xl max-[1000px]:pb-10 max-[700px]:text-lg max-[500px]:text-base max-[400px]:text-sm">
              Indulge in TezeHotel’s luxury dining, featuring world-class chefs,
              exquisite flavors, and the finest ingredients. Enjoy gourmet
              dishes, artfully presented, paired with exceptional service for an
              unforgettable culinary experience.
            </p>

            {/* Button to Open Menu Modal */}
            <button onClick={openMenu} className="uppercase bg-second-gold max-w-max py-4 px-10 font-black text-lg cursor-pointer max-[1200px]:text-base">See our menu</button>
          </div>
        </div>
      </section>

      {/* Modal for Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-max">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h2 className="text-lg font-semibold">Our Menu</h2>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                ✖
              </button>
            </div>
            {/* Content */}
            <div className="p-4">
              <h2 className="font-bold text-3xl pb-5 max-[800px]:text-xl max-[500px]:text-lg max-[500px]:max-w-[60%] max-[400px]:max-w-[100%] max-[400px]:text-center max-[400px]:text-base">Explore our wide variety of delicious dishes!</h2>
              <ul className="max-[400px]:grid max-[400px]:grid-cols-2">
                  {menuItems.map(item => (
                      <li className="max-[800px]:text-center max-[500px]:text-left max-[400px]:text-center">
                        <span className="font-bold pr-4 text-xl max-[900px]:text-lg max-[500px]:text-base max-[500px]:font-thin max-[400px]:text-xs">{item.heading}</span>  
                        <span className="text-lg max-[900px]:text-base max-[800px]:hidden">{item.text}</span>
                      </li>
                  ))}
              </ul>
            </div>
            {/* Footer */}
            <div className="flex justify-end px-4 py-2 border-t">
              <button onClick={closeMenu} className="px-4 py-2 text-sm font-bold text-main-dark bg-second-gold rounded hover:bg-main-gold hover:text-main-light focus:outline-none">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Food;