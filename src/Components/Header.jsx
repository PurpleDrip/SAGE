import React, { useEffect } from "react";
import Theme from "./Theme";
import { useState } from "react";

const Header = () => {
  const [switched, setSwitched] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSwitched((prev) => !prev);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="mt-4 flex justify-between items-center px-8 h-16">
      <div className="">
        <a href="#">
          <img src="/Images/SAGE text_blue.png" alt="logo" className="w-20" />
        </a>
      </div>
      <div className="flex h-full items-center gap-4 bg-base-200 lg:menu-horizontal rounded-box px-8">
        <Theme />
        <a href="#">
          <button className="btn-ghost btn btn-primary ">Home</button>
        </a>
        <a href="#">
          <button className="btn-ghost btn btn-primary">About Us</button>
        </a>
        <a href="#">
          <button className="btn-ghost btn btn-primary">Services</button>
        </a>
        <a href="#">
          <button className="btn-ghost btn btn-primary">News</button>
        </a>
        <a href="#">
          <button className="btn-ghost btn btn-primary">Contact Us</button>
        </a>
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
