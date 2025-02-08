import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
    const [allInfo, setAllInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setIsLoggedIn } = useContext(AdminContext);
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const response = await fetch("https://tezehotel-backend.onrender.com/login/getInfo");
                const data = await response.json();

                if (response.ok && data.email) {
                    setUserEmail(data.email);
                    console.log(data);
                } else {
                    setError("Failed to fetch user email");
                }
            } catch (err) {
                setError("Error fetching user email");
                console.error(err);
            }
        };

        const getReservations = async () => {
            try {
                const res = await fetch("https://tezehotel-backend.onrender.com/reservations/");
                const json = await res.json();
                setAllInfo(json);
            } catch (error) {
                setError("Failed to fetch reservations");
                console.error("Failed to fetch reservations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserEmail();
        getReservations();
    }, []);

    const handleLogOut = async () => {
        try {
            const response = await fetch(`https://tezehotel-backend.onrender.com/${userEmail}/reservations/logout`);

            if (response.ok) {
                setIsLoggedIn(false);
                navigate("/");
            } else {
                setError("Failed to log out. Please try again.");
            }
        } catch (err) {
            setError("Error logging out");
            console.error(err);
        }
    };

    const filteredUsers = allInfo.filter((user) => user.bookings.length > 0);

    return (
        <section className="bg-main-gold w-full min-h-[95vh] px-[15%] py-10 flex flex-col items-center justify-between max-[1000px]:px-[7.5%]">
            {/*  header div  */}
            <div className="text-center py-10">
                <h1 className="text-6xl font-bold mb-6 max-[1000px]:text-4xl">Reservations</h1>
                <p className="text-3xl font-bold cursor-pointer py-6 max-[1000px]:text-xl max-[1000px]:py-3" onClick={handleLogOut}>Log out</p>
            </div>
            {loading ? (
                <p>Loading reservations...</p>
            ) : (
                <div className="w-full">
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, userIndex) => (
                            <div key={userIndex} className="reservation-card bg-white p-4 rounded-lg shadow-md mb-4">
                                <h2 className="text-3xl font-bold max-[1000px]:text-2xl">{user.name}</h2>
                                <p className="text-gray-600 font-bold">{user.mail}</p>
                                <div className="mt-4">
                                    {user.bookings.map((booking, bookingIndex) => (
                                        <div key={bookingIndex} className="booking-info bg-gray-100 p-3 rounded-md mb-2">
                                            <p className="text-xl max-[1000px]:text-lg"><strong>Room:</strong> {booking.room}</p>
                                            <p className="text-xl max-[1000px]:text-lg"><strong>View:</strong> {booking.view}</p>
                                            <p className="text-xl max-[1000px]:text-lg"><strong>Start Date:</strong> {booking.startDate}</p>
                                            <p className="text-xl max-[1000px]:text-lg"><strong>End Date:</strong> {booking.endDate}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reservations found.</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default Reservations;