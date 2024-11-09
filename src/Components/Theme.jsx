import React, { useEffect, useState } from "react";

const Theme = () => {
  const [currentTheme, setCurrentTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "mytheme";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setCurrentTheme(savedTheme === "mytheme" ? "default" : savedTheme);
  }, []);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    const themeToSet = selectedTheme === "default" ? "mytheme" : selectedTheme;
    document.documentElement.setAttribute("data-theme", themeToSet);
    localStorage.setItem("theme", themeToSet);
    setCurrentTheme(selectedTheme);
  };

  return (
    <div className="dropdown theme-dropdown">
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
        {["default", "dark", "light", "retro", "valentine"].map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
              onChange={handleThemeChange}
              checked={currentTheme === theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
