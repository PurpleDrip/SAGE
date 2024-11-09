import React from "react";

const Theme = () => {
  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme === "default") {
      document.documentElement.setAttribute("data-theme", "mytheme");
    } else {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  };

  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1 ">
        Theme
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
        {["default", "light", "retro", "cyberpunk", "valentine", "aqua"].map(
          (theme) => (
            <li key={theme}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme}
                value={theme}
                onChange={handleThemeChange}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Theme;
