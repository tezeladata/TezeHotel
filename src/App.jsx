import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavbarMain from "./Components/NavbarMain.jsx";
import About from "./pages/About.jsx";

const App = () => {
    return (
        <Router>
            <div className="font-groce relative">
                <NavbarMain />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;