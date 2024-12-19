import * as React from "react";

export function ProductCard({ imageUrl, productName, priceRange }) {
  return (
    <div className="flex flex-col items-start max-w-full w-[172px]">
      <div className="flex flex-col justify-center items-center self-stretch px-2 w-full rounded-md bg-zinc-100 h-[172px]">
        <div className="flex overflow-hidden flex-col justify-center items-center px-3 bg-white bg-blend-multiply h-[155px] w-[155px]">
          <img
            loading="lazy"
            src={imageUrl}
            alt={productName}
            className="object-contain aspect-[0.99] w-[131px]"
          />
        </div>
      </div>
      <div className="mt-3.5 text-base text-neutral-600">{productName}</div>
      <div className="mt-2.5 text-base text-gray-400">{priceRange}</div>
    </div>
  );
}



