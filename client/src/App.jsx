import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavbarMain from "./Components/NavbarMain.jsx";
import About from "./pages/About.jsx";
import Rooms from "./pages/Rooms.jsx";
import Food from "./pages/Food.jsx";
import Reviews from "./pages/Reviews.jsx";
import Analytics from "./pages/Analytics.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import BookNow from "./pages/BookNow.jsx";
import Reservations from "./pages/Reservations.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const App = () => {
    return (
            <div className="font-winslowBook relative">
                <NavbarMain />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Block Admins from accessing BookNow */}
                    <Route
                        path="/bookNow"
                        element={
                            <ProtectedRoute requireLogin={true} blockAdmin={true}>
                                <BookNow />
                            </ProtectedRoute>
                        }
                    />

                    {/* Only Admins can access Reservations */}
                    <Route
                        path="/reservations"
                        element={
                            <ProtectedRoute requireAdmin={true}>
                                <Reservations />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
    );
};

export default App;