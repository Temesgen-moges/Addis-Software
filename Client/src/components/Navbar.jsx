import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CenterMenu from "./CenterMenu";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
  
    navigate("/home");
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div
      className={`header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] pb-[2rem] text-[0.8rem] border-b-2 border-orange my-0 rounded-b-3xl ${
        scrolled ? "fixed top-0 left-0 right-0 z-50" : ""
      }`}
    >
      <CenterMenu />
      <button
        onClick={handleClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out ${
          scrolled ? "hover:scale-110" : ""
        }`}
      >
        My Music
      </button>
    </div>
  );
}

export default Navbar;
