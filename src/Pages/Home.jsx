import React from "react";
import Header from "../Components/Header";
import WeOffer from "../Components/WeOffer";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Timeline from "../Components/Timeline";
import Vision from "../Components/Vision";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Timeline />
      <Vision />
      <WeOffer />
      <Footer />
    </div>
  );
};

export default Home;
