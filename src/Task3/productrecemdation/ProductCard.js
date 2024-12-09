import * as React from "react";

export function ProductCard({ imageSrc, title, price }) {
  return (
    <div className="flex flex-col border border-gray-300 p-4 rounded-lg shadow-md">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-20 rounded-none aspect-square"
      />
      {/* Title with Text Styling */}
      <div className="text-black font-semibold mt-2">{title}</div>
      {/* Price styling */}
      <div className="text-gray-600 mt-1">{price}</div>
    </div>
  );
}
