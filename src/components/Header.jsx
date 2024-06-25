import React from "react";

function Header() {
  return (
    <header className="px-6 flex flex-col text-corprimaria text-left w-full border-b-2 border-cyan-700 bg-gray-900">
      <a href="/" link="/">
        <h1 className="pt-2 text-2xl font-bold font-inter">
          Tkinter GUI Generator
        </h1>
        <h6 className="pb-2 my-auto text-xs font-bold font-inter">
          Toolkit
        </h6>
      </a>
    </header>
  );
}

export default Header;
