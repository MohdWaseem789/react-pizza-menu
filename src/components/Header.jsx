import React from "react";

const Header = () => {
  return (
    <header className="header flex flex-col items-center py-8  text-black">
      <h1 className="text-5xl font-light uppercase tracking-wide">
        Fast Pizza Company
      </h1>
      <div className="w-36 h-1 bg-yellow-400 mt-4"></div>
    </header>
  );
};

export default Header;
