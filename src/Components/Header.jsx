import React, { useEffect } from "react";
import Theme from "./Theme";
import { useState } from "react";
import { gsap } from "gsap";
import About from "./About";
import Services from "./Service";
import News from "./News";
import { slide as Menu } from "react-burger-menu";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [switched, setSwitched] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only run on non-mobile devices
    if (window.innerWidth > 768) {
      const intervalId = setInterval(() => {
        setSwitched((prev) => !prev);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    // Only run on non-mobile devices
    if (window.innerWidth > 768) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
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
    <>
      <div
        className={`title-bar mt-4 flex justify-between items-center px-8 h-16 top-4  `}
      >
        <div className={`${scrolled ? "hide" : ""}`}>
          <a href="/">
            <img src="/Images/SAGETEXT.png" alt="logo" className="w-20" />
          </a>
        </div>

        <label
          className={`input input-bordered flex items-center gap-2 hide hide-tb ${
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
        <div className="show show-tb">
          <Theme />
        </div>
        <div className="show show-tb" onClick={() => setOpen(!open)}>
          <button className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="fixed top-20 right-8 show show-tb dropdown-container-mb z-50">
          {open && (
            <div className="flex flex-col gap-2 p-4 bg-base-200 rounded-box shadow-xl">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost w-full"
                >
                  About Us
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                >
                  <li>
                    <a href="/sage-team">SAGE Team</a>
                  </li>
                  <li>
                    <a href="/about/#mission">Mission</a>
                  </li>
                  <li>
                    <a href="/about/#vision">Vision</a>
                  </li>
                  <li>
                    <a href="/about/#goals">Goals</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost w-full"
                >
                  Services
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[10] menu p-2 shadow bg-base-200 rounded-box w-52"
                >
                  <li>
                    <a href="/services">Courses</a>
                  </li>
                  <li>
                    <a href="/services">Tutorials</a>
                  </li>
                  <li>
                    <a href="/services">Workshops</a>
                  </li>
                  <li>
                    <a href="/services">Training</a>
                  </li>
                  <li>
                    <a href="/services">Consulting</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost w-full"
                >
                  News
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                >
                  <li>
                    <a href="/">Upcoming News</a>
                  </li>
                  <li>
                    <a href="/">NewsLetters</a>
                  </li>
                  <li>
                    <a href="/">Photo Gallery</a>
                  </li>
                </ul>
              </div>

              <a href="/contact" className="btn btn-ghost w-full">
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="hide links-wrapper flex items-center gap-4 bg-base-200 lg:menu-horizontal rounded-box px-8 fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <Theme />
        <a href="/">
          <button className="btn-ghost btn btn-primary ">Home</button>
        </a>
        <About />
        <Services />
        <News />
        <a href="/contact">
          <button className="btn-ghost btn btn-primary">Contact Us</button>
        </a>
      </div>
    </>
  );
};

export default Header;
