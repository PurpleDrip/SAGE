import React from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import SAGETeam from "./pages/SAGETeam"; 
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Goal from "./pages/Goal";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about/sage-team" element={<SAGETeam />} /> {/* Changed to 'element' */}
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/vision" element={<Vision />} />   
        <Route path="/about/goal" element={<Goal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
