import React from "react";

const NewsDropdown = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        News
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
            href="#upcoming-news"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Upcoming News
          </a>
        </li>
        <li>
          <a
            href="#newsletter"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Newsletter
          </a>
        </li>
        <li>
          <a
            href="#photo-gallery"
            className="btn btn-sm btn-block btn-ghost justify-start"
          >
            Photo Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NewsDropdown;
