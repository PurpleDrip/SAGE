import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-grow">services</div>
      <Footer />
    </div>
  );
};

export default Service;
