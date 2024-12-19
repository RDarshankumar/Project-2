import * as React from "react";

export function ProductCard({ imageSrc, title, price }) {
  return (
    <div className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md sm:w-60 md:w-72 lg:w-80">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full h-40 sm:h-48 md:h-56 rounded-lg"
      />
      {/* Title with Text Styling */}
      <div className="text-black font-semibold mt-2 text-sm sm:text-base md:text-lg">
        {title}
      </div>
      {/* Price Styling */}
      <div className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">{price}</div>
    </div>
  );
}
