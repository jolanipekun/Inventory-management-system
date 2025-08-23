import React, { useRef, useState, useEffect } from "react";
import Logo from "./../assets/DevPOSLogo.webp";
import Dropdown from "./Dropdown";

import { IoSearchOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";
import { LiaUserCircleSolid } from "react-icons/lia";
import { LuSettings } from "react-icons/lu";
import { PiBellLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Input from "./Input";

const Header = () => {
  const dropdownRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggle = (index) => {
    if (activeDropdown === index) {
      // If the same icon is clicked again, hide the dropdown
      setActiveDropdown(null);
    } else {
      // Otherwise, set the active dropdown to the clicked index
      setActiveDropdown(index);
    }
  };

  useEffect(() => {
    // Function to handle clicks outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null); // Hide the dropdown if clicked outside
      }
    };

    // Attach event listener to the window
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full h-[13vh] bg-[#f8f9ff] flex items-center justify-center">
      <nav className="w-[95vw] h-[90%]  flex items-center justify-center">
        <div className="flex items-center justify-evenly w-1/2 h-full ">
          <div className="w-1/4 h-4/5 flex pt-3 justify-start cursor-pointer">
            <img src={Logo} width={60} />
          </div>
          <div className="flex items-center justify-between w-[70%] h-[70%] bg-white rounded-sm px-3">
            <Input type="search" placeholder="Search here" width="300px" />
            <IoSearchOutline
              className="w-[2vw] h-[4vh] hover:scale-105 transition cursor-pointer"
              style={{ color: "#0000004D" }}
            />
          </div>
        </div>
        <div
          className="flex items-center justify-end  w-1/2 h-4/5 gap-2"
          ref={dropdownRef}
        >
          <div className="flex items-center relative justify-center gap-2 cursor-pointer select-none">
            <span className="text-[#308549] text-[1rem]">
              Amir Watch Shalmi
            </span>
            <IoIosArrowDown
              className="w-[2vw] h-[4vh] hover:scale-105 transition"
              style={{ color: "#308549" }}
            />
          </div>
          <div className="p-[5px] relative" onClick={() => toggle(1)}>
            <PiBellLight
              className="w-[2vw] h-[4vh] hover:scale-105 transition cursor-pointer select-none"
              style={{ color: "#000000B2" }}
            />
            <div
              style={
                activeDropdown === 1
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="absolute top-14 right-1 "
            >
              <Dropdown />
            </div>
          </div>
          <div className="p-[5px] relative" onClick={() => toggle(2)}>
            <LuSettings
              className="w-[2vw] h-[4vh] hover:scale-105 transition cursor-pointer select-none"
              style={{ color: "#000000B2" }}
            />
            <div
              style={
                activeDropdown === 2
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="absolute top-14 right-1 "
            >
              <Dropdown />
            </div>
          </div>
          <div className="p-[5px] relative" onClick={() => toggle(3)}>
            <LiaUserCircleSolid
              className="w-[2vw] h-[4vh] hover:scale-105 transition cursor-pointer select-none"
              style={{ color: "#000000B2" }}
            />
            <div
              style={
                activeDropdown === 3
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="absolute top-14 right-1 "
            >
              <Dropdown />
            </div>
          </div>
          <div className="p-[5px] relative" onClick={() => toggle(4)}>
            <PiSquaresFour
              className="w-[2vw] h-[4vh] hover:scale-105 transition cursor-pointer select-none"
              style={{ color: "#000000B2" }}
            />
            <div
              style={
                activeDropdown === 4
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="absolute top-14 right-1 "
            >
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
