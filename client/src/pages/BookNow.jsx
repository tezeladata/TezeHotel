import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const BookNow = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ room: '', view: '', startDate: '', endDate: '' });
    const [editBooking, setEditBooking] = useState(null);
    const [error, setError] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const response = await fetch('http://localhost:3000/login/getInfo');
                const data = await response.json();

                console.log(data);

                if (response.ok) {
                    setUserEmail(data.email);
                } else {
                    setError('Failed to fetch user email');
                }
            } catch (err) {
                setError('Error fetching user email');
                console.error(err);
            }
        };

        fetchUserEmail();
    }, []);

    useEffect(() => {
        if (userEmail) {
            const fetchBookings = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/${userEmail}/bookings`);
                    const data = await response.json();
                    if (response.ok) {
                        setBookings(data); // Set bookings data
                    } else {
                        setError(data.message);
                    }
                } catch (err) {
                    setError('Failed to fetch bookings');
                }
            };

            fetchBookings();
        }
    }, [userEmail]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (new Date(newBooking.startDate) >= new Date(newBooking.endDate)) {
            setError('Start date must be earlier than end date.');
            return;
        }

        setError(null);

        const bookingData = {room: newBooking.room, view: newBooking.view, startDate: newBooking.startDate, endDate: newBooking.endDate,
        };

        if (editBooking) {
            const response = await fetch(`http://localhost:3000/${userEmail}/bookings/${editBooking.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            const updatedBooking = await response.json();
            if (response.ok) {
                setBookings(bookings.map((booking) =>
                    booking.id === updatedBooking.id ? updatedBooking : booking
                ));
                setEditBooking(null);
            } else {
                setError(updatedBooking.message);
            }
        } else {
            const response = await fetch(`http://localhost:3000/${userEmail}/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            const newBookingData = await response.json();
            if (response.ok) {
                setBookings([...bookings, newBookingData]);
            } else {
                setError(newBookingData.message);
            }
        }

        setNewBooking({ room: '', view: '', startDate: '', endDate: '' });
    };

    const handleEdit = (booking) => {
        setEditBooking(booking);
        setNewBooking({room: booking.room, view: booking.view, startDate: booking.startDate, endDate: booking.endDate,
        });
    };

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/${userEmail}/bookings/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setBookings(bookings.filter((booking) => booking.id !== id));
        } else {
            const data = await response.json();
            setError(data.message);
        }
    };

    const handleLogOut = async () => {
    const response = await fetch(`http://localhost:3000/${userEmail}/bookings/logout`);

    if (response.ok) {
        navigate("/");
    } else {
        setError('Failed to log out. Please try again.');
    }
};

    return (
        <section className="bg-main-gold w-full min-h-[95vh] px-[15%] py-10 flex items-center justify-between gap-12 max-[1000px]:px-[7.5%] max-[1000px]:flex-col">
            <section className="w-1/2 py-12 rounded-lg max-[1000px]:w-[80%] max-[500px]:w-[100%]">
                <h1 className="text-6xl font-semibold text-center text-gray-800 py-6">Book Now</h1>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Room */}
                    <div>
                        <label htmlFor="room" className="block text-xl text-main-dark">Room</label>
                        <select id="room" value={newBooking.room} onChange={(e) => setNewBooking({...newBooking, room: e.target.value})} required className="bg-main-gray text-main-light w-full p-2 border border-main-dark rounded-md focus:outline-none focus:ring-2 focus:ring-main-gold">
                            <option value="" disabled>Select room type</option>
                            <option value="basic" className="bg-main-gold text-main-light font-bold">Basic</option>
                            <option value="couple" className="bg-main-gold text-main-light font-bold">Couple</option>
                            <option value="business" className="bg-main-gold text-main-light font-bold">Business</option>
                            <option value="luxury" className="bg-main-gold text-main-light font-bold">Luxury</option>
                        </select>
                    </div>

                    {/* View */}
                    <div>
                        <label htmlFor="view" className="block text-xl text-main-dark">View</label>
                        <select id="view" value={newBooking.view} onChange={(e) => setNewBooking({...newBooking, view: e.target.value})} required className="bg-main-gray text-main-light w-full p-2 border border-main-dark rounded-md focus:outline-none focus:ring-2 focus:ring-main-gold">
                            <option value="" disabled>Select view type</option>
                            <option value="Sea view" className="bg-main-gold text-main-light font-bold">Sea view</option>
                            <option value="Mountain view" className="bg-main-gold text-main-light font-bold">Mountain view</option>
                        </select>
                    </div>

                    {/* Start Date */}
                    <div>
                        <label htmlFor="startDate" className="block text-xl text-main-dark">Start Date</label>
                        <input type="date" id="startDate" value={newBooking.startDate} onChange={(e) => setNewBooking({...newBooking, startDate: e.target.value})} required className="bg-main-gray text-main-light w-full p-2 border border-main-dark rounded-md focus:outline-none focus:ring-2 focus:ring-main-gold"/>
                    </div>

                    {/* End Date */}
                    <div>
                        <label htmlFor="endDate" className="block text-xl text-main-dark">End Date</label>
                        <input type="date" id="endDate" value={newBooking.endDate} onChange={(e) => setNewBooking({...newBooking, endDate: e.target.value})} required className="bg-main-gray text-main-light w-full p-2 border border-main-dark rounded-md focus:outline-none focus:ring-2 focus:ring-main-gold"
                        />
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="text-red-500 text-lg py-2 font-bold">{error}</div>
                    )}

                    <button type="submit" className="w-full py-4 bg-main-dark text-main-light text-2xl rounded-md hover:bg-second-gray focus:outline-none focus:ring-2 focus:ring-main-gold">{editBooking ? 'Update Booking' : 'Create Booking'}</button>
                </form>
            </section>

            <section className="w-1/2 max-[1000px]:w-[80%] max-[500px]:w-[100%]">
                <div className="w-full flex flex-col items-end justify-center max-[1000px]:items-center">
                    <h2 className="text-4xl font-bold text-main-dark py-2">Current Bookings</h2>
                    <p className="text-xl font-bold py-2">{userEmail}</p>
                    <p className="text-2xl font-bold cursor-pointer py-6" onClick={handleLogOut}>Log out</p>
                    <ul className="mt-4 space-y-4 w-[80%]">
                        {bookings.map((booking) => (
                            <li key={booking.id} className="p-4 bg-second-gray border outline-none border-gray-200 text-main-light rounded-md shadow-sm">
                                <p className="text-xl font-bold pb-6">Room: {booking.room}</p>
                                <p className="text-lg font-semibold py-1">View: {booking.view}</p>
                                <p className="text-lg font-semibold py-1">Start Date: {booking.startDate}</p>
                                <p className="text-lg font-semibold py-1">End Date: {booking.endDate}</p>
                                <div className="mt-4 flex space-x-4">
                                    <button onClick={() => handleEdit(booking)} className="text-xl text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">Edit
                                    </button>
                                    <button onClick={() => handleDelete(booking.id)} className="text-xl text-red-300 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default BookNow;