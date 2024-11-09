import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <>
      <Theme />
      <button className="btn btn-primary" data-theme="mytheme">
        Click me
      </button>
    </>
  );
};

export default Header;
