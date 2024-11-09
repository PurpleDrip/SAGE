import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

const App = () => {
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "mytheme";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
