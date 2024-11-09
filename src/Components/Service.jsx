import React from "react";

const Services = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Services
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        <li>
          <a
            href="#consulting"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#development"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Tutorials
          </a>
        </li>
        <li>
          <a
            href="#design"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Workshops
          </a>
        </li>
        <li>
          <a
            href="#marketing"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Training
          </a>
        </li>
        <li>
          <a
            href="#support"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Consulting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Services;
