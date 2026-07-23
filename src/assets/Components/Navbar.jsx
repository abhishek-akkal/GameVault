import React from "react";
import Logo from "./Images/Logo.png";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="h-20 border-b border-gray-900 flex justify-between items-center px-4 md:px-10">
      {/* Logo */}
      <div className="flex items-center text-xl md:text-2xl cursor-pointer">
        <img src={Logo} alt="Logo" className="h-14 w-28 object-cover" />
        <div>Game</div>
        <div className="text-purple-500">Vault</div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 md:gap-10 text-lg md:text-xl">
        <div className="text-purple-500 cursor-pointer active:scale-95">
          Home
        </div>

        <div className="hidden sm:block cursor-pointer active:scale-95">
          Games
        </div>

        <div className="hidden md:block cursor-pointer active:scale-95">
          Categories
        </div>

        <div className="hidden lg:block cursor-pointer active:scale-95">
          Deals
        </div>

        <div className="hidden lg:block cursor-pointer active:scale-95">
          About
        </div>
      </div>

      {/* Icons */}
      <div className="hidden md:flex gap-6 px-4">
        <IoCartOutline className="text-4xl text-purple-500 cursor-pointer active:scale-95" />
        <GoPerson className="text-4xl cursor-pointer active:scale-95" />
      </div>
    </div>
  );
};

export default Navbar;
