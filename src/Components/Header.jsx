import React, { useEffect } from "react";
import Theme from "./Theme";
import { useState } from "react";
import { gsap } from "gsap";
import About from "./About";
import Services from "./Service";
import News from "./News";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [switched, setSwitched] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSwitched((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".title-bar", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power2.inOut",
    }).from(".links-wrapper", {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      className={`title-bar mt-4 flex ${
        scrolled ? "justify-center" : "justify-between"
      } items-center px-8 h-16 sticky top-4 z-50`}
    >
      <div className={`${scrolled ? "hide" : ""}`}>
        <a href="#">
          <img src="/Images/SAGE text_blue.png" alt="logo" className="w-20" />
        </a>
      </div>
      <div className="links-wrapper flex h-full items-center gap-4 bg-base-200 lg:menu-horizontal rounded-box px-8">
        <Theme />
        <a href="#">
          <button className="btn-ghost btn btn-primary ">Home</button>
        </a>
        <About />
        <Services />
        <News />
        <a href="#">
          <button className="btn-ghost btn btn-primary">Contact Us</button>
        </a>
      </div>
      <label
        className={`input input-bordered flex items-center gap-2 ${
          scrolled ? "hide" : ""
        }`}
      >
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
