import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-8">
      <Header />
      <div className="breadcrumbs text-sm pl-8">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex-grow mx-32 p-8 gap-4 flex flex-col shadow-xl border border-primary-content rounded-3xl about-container">
        <h1 className="text-5xl font-bold tracking-[1rem] pl-4 after-underline text-center text-accent after:bg-accent">
          About Us
        </h1>
        <div id="sage-team">
          <h3 className="text-2xl font-bold">SAGE TEAM</h3>
          <p>
            Shastry Associates Global Enterprise (SAGE) is a dynamic and
            innovative company that specializes in providing cutting-edge
            technology solutions to businesses around the world. With a strong
            focus on research and development, SAGE is committed to delivering
            high-quality products and services that meet the evolving needs of
            its clients.
          </p>
        </div>

        <div id="mission">
          <h3 className="text-2xl font-bold">Mission</h3>
          <p>
            Our mission is to deliver innovative and reliable technology
            solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
        <div id="vision">
          <h3 className="text-2xl font-bold">Vision</h3>
          <p>
            Our vision is to be a leading global provider of technology
            solutions that drive growth and innovation for our clients.
          </p>
        </div>
        <div id="goals">
          <h3 className="text-2xl font-bold">Goals</h3>
          <p>
            Our goals are to deliver innovative and reliable technology
            solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
