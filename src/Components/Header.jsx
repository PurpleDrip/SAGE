import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";

const Header = ({ setActiveSection }) => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const handleLinkClick = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }
    setShowAboutDropdown(false); // Hide dropdown after selection
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setShowAboutDropdown(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowAboutDropdown(false);
    }, 10000); // 10 seconds
    setDropdownTimer(timer);
  };

  useEffect(() => {
    return () => {
      clearTimeout(dropdownTimer);
    };
  }, [dropdownTimer]);

  return (
    <div className="mt-4 flex justify-between items-center px-8 h-16">
      <div>
        <Link to="/">
          <img src="/Images/SAGE text_blue.png" alt="logo" className="w-20" />
        </Link>
      </div>
      <div className="flex h-full items-center gap-4 bg-base-200 lg:menu-horizontal rounded-box px-8">
        <Theme />
        <Link to="/">
          <button className="btn-ghost btn btn-primary">Home</button>
        </Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/about">
            <button className="btn-ghost btn btn-primary">About Us</button>
          </Link>
          {/* Dropdown options */}
          {showAboutDropdown && (
            <div className="absolute bg-white text-black w-56 mt-2 rounded shadow-lg z-10">
              <Link to="/about/sage-team" className="block px-4 py-2" onClick={() => handleLinkClick("sageTeam")}>
                SAGE Team
              </Link>
              <Link to="/about/mission" className="block px-4 py-2" onClick={() => handleLinkClick("mission")}>
                Mission
              </Link>
              <Link to="/about/vision" className="block px-4 py-2" onClick={() => handleLinkClick("vision")}>
                Vision
              </Link>
              <Link to="/about/goal" className="block px-4 py-2" onClick={() => handleLinkClick("goal")}>
                Goal
              </Link>
            </div>
          )}
        </div>
        <Link to="/services">
          <button className="btn-ghost btn btn-primary">Services</button>
        </Link>
        <Link to="/news">
          <button className="btn-ghost btn btn-primary">News</button>
        </Link>
        <Link to="/contact">
          <button className="btn-ghost btn btn-primary">Contact Us</button>
        </Link>
      </div>
      <label className="input input-bordered flex items-center gap-2">
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
