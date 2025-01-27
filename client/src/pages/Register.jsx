import React, {useContext, useEffect, useState} from "react";
import roomImage from "../assets/images/hotel-second.jpg";
import {AdminContext} from "../context/AdminContext.jsx";
import {useNavigate} from "react-router-dom";
import Login from "./Login.jsx";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const { admin, setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Admin value updated:", admin);
    }, [admin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setAdmin(
            e.target.isAdmin.value.toLowerCase() === "yes"
        );

        const form = e.target;
        const formData = new FormData(form);
        const acc = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(acc),
            });

            if (res.ok) {
                const data = await res.json();
                alert(data.message);
                form.reset();
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (err) {
            console.error(err);
            alert("Failed to register. Please try again later.");
        } finally {
            setLoading(false);
            navigate("/login")
        }
    };

    return (
        <section className="layer7 spacer w-screen min-h-[95vh] flex items-center justify-between px-[15%] py-10 max-[1000px]:px-[7.5%] max-[1000px]:flex-col max-[1000px]:min-h-[135vh] max-[400px]:min-h-[170vh]">
            {/* form container */}
            <div className="w-1/2 flex flex-col items-stars justify-center max-[1000px]:w-screen max-[1000px]:items-center max-[1000px]:py-10">
                <h1 className="pb-10 text-6xl max-[600px]:text-4xl">Register / <span onClick={() => navigate("/login")} className="cursor-pointer">to LOGIN</span></h1>

                <form onSubmit={handleSubmit}
                      className="flex flex-col gap-6 w-[80%] max-[1000px]:w-[60%] max-[600px]:w-[80%]">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="fullname" id="fullname" className="block py-2.5 px-0 w-full text-xl font-bold text-black bg-transparent border-0 border-b-2 border-second-gray appearance-none focus:outline-none focus:ring-0 focus:border-main-dark peer" placeholder=" " required/>
                        <label htmlFor="fullname" className="peer-focus:font-medium absolute text-xl text-main-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-second-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fullname</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="age" id="age" className="block py-2.5 px-0 w-full text-xl font-bold text-black bg-transparent border-0 border-b-2 border-second-gray appearance-none focus:outline-none focus:ring-0 focus:border-main-dark peer" placeholder=" " min="18" required/>
                        <label htmlFor="age" className="peer-focus:font-medium absolute text-xl text-main-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-second-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-xl font-bold text-black bg-transparent border-0 border-b-2 border-second-gray appearance-none focus:outline-none focus:ring-0 focus:border-main-dark peer" placeholder=" " required/>
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-xl text-main-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-second-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-xl font-bold text-black bg-transparent border-0 border-b-2 border-second-gray appearance-none focus:outline-none focus:ring-0 focus:border-main-dark peer" placeholder=" " minLength="6" required/>
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-xl text-main-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-second-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="isAdmin" id="isAdmin" className="block py-2.5 px-0 w-full text-xl font-bold text-black bg-transparent border-0 border-b-2 border-second-gray appearance-none focus:outline-none focus:ring-0 focus:border-main-dark peer" placeholder=" " required/>
                        <label htmlFor="isAdmin" className="peer-focus:font-medium absolute text-xl text-main-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-second-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Admin? Yes / No</label>
                    </div>

                    <button type="submit" disabled={loading}
                            className="text-white bg-main-dark hover:bg-second-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center">
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>

            {/* image container */}
            <div
                className="w-1/2 flex items-center justify-end max-[1000px]:w-screen max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:py-10">
                <img src={roomImage} alt="room image"
                     className="object-cover w-[80%] h-[700px] rounded-3xl shadow-[0px_0px_71px_27px_rgba(138,129,64,1)] max-[1700px]:h-[500px] max-[1000px]:w-[60%] max-[600px]:w-[80%] max-[400px]:h-[400px] cursor-pointer"/>
            </div>
        </section>
    );
};

export default Register;