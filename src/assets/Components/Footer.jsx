import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbHeadsetFilled } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import { FiGift } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="pt-20">
      <div className="flex justify-center pb-10 ">
        <div className="flex justify-around items-center h-30 w-300 bg-gray-900 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-purple-950 flex items-center justify-center rounded-full">
              <IoShieldCheckmarkSharp className="text-3xl text-purple-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Secure Payment</p>
              <p className="text-gray-400">100% secure payments</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-950 flex items-center justify-center rounded-full">
              <TbHeadsetFilled className="text-3xl text-blue-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">24/7 Support</p>
              <p className="text-gray-400">We're here to help</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-950 flex items-center justify-center rounded-full">
              <LuRefreshCw className="text-3xl text-green-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Easy Refund</p>
              <p className="text-gray-400">7-day money back</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#28241B] flex items-center justify-center rounded-full">
              <FiGift className="text-3xl text-[#DAAC3F]" />
            </div>
            <div>
              <p className="font-semibold text-lg">Best Deals</p>
              <p className="text-gray-400">Get the best prices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 flex justify-center border-t border-gray-800">
        <p className="mt-5">
          © 2026 GameVault • Designed & Developed by Abhishek
        </p>
      </div>
    </div>
  );
};

export default Footer;
