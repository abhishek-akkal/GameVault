import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Cards = ({ title, genre, rating, price, oldPrice, image }) => {
  return (
    <div className="pb-10">
      <div className="w-85 h-150 bg-gray-900 text-white rounded-2xl broder-2 border-gray-600">
        <div className="">
          <img
            src={image}
            alt={title}
            className="w-full h-110 object-cover hover:scale-105 transition duration-300 rounded-t-xl cursor-pointer"
          />
        </div>
        <div className="text-2xl px-3 py-2 font-semibold">{title}</div>
        <div className="px-3 text-purple-500">{genre}</div>
        <div className="px-3 py-1">{rating}</div>
        <div className="flex justify-between items-center px-3 py-2">
          <div className="text-xl font-semibold text-purple-500 flex gap-5">
            {price}
            <div className="text-lg text-gray-500 line-through">{oldPrice}</div>
          </div>

          <button
            onClick={() => alert("Added to cart!")}
            className="h-9 bg-purple-800 px-2 rounded-lg flex justify-between items-center gap-2 font-semibold cursor-pointer active:scale-95"
          >
            Add to Cart
            <FiShoppingCart className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
