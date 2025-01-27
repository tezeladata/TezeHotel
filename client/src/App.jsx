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
                <Route path="/bookNow" element={<BookNow />} />
            </Routes>
        </div>
    );
}

export default App;