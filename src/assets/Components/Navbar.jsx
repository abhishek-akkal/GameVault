import React from "react";
import Logo from "./Images/Logo.png";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="h-20  border-b border-gray-900 flex justify-between items-center px-10">
      <div className="flex items-center text-2xl cursor-pointer">
        <img src={Logo} alt="Logo" className="h-15 w-30 object-cover" />
        <div>Game</div>
        <div className="text-purple-500">Valut</div>
      </div>

      <div className="flex gap-10 text-xl">
        <div className="text-purple-500 cursor-pointer active:scale-95">
          Home
        </div>
        <div className="cursor-pointer active:scale-95">Games</div>
        <div className="cursor-pointer active:scale-95">Categories</div>
        <div className="cursor-pointer active:scale-95">Deals</div>
        <div className="cursor-pointer active:scale-95">About</div>
      </div>

      <div className="flex gap-6 px-10">
        <div>
          <IoCartOutline className="text-4xl text-purple-500 cursor-pointer active:scale-95" />
        </div>

        <div>
          <GoPerson className="text-4xl cursor-pointer active:scale-95" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
