import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavbarMain from "./Components/NavbarMain.jsx";
import About from "./pages/About.jsx";
import Rooms from "./pages/Rooms.jsx";

const App = () => {
    return (
        <Router>
            <div className="font-groce relative">
                <NavbarMain />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/rooms" element={<Rooms />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;