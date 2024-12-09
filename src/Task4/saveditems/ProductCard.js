import * as React from "react";

export function ProductCard({ image, price, title, cartIcon }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:mt-5">
        <div className="flex flex-col justify-center self-stretch px-6 py-2 rounded-md bg-zinc-100 max-md:px-5">
          <div className="flex overflow-hidden flex-col justify-center items-center px-4 bg-white bg-blend-multiply aspect-square">
            <img
              loading="lazy"
              src={image}
              alt={title}
              className="object-contain aspect-square w-[194px]"
            />
          </div>
        </div>
        <div className="mt-2.5 text-lg font-semibold text-zinc-900">
          ${price.toFixed(2)}
        </div>
        <div className="mt-2.5 text-base tracking-normal leading-6 text-zinc-600">
          {title}
        </div>
        <button 
          className="flex gap-3.5 px-3.5 py-2.5 mt-3 max-w-full text-base font-medium text-blue-600 bg-white rounded-md border border-solid border-zinc-200 w-[157px]"
          tabIndex="0"
          aria-label={`Move ${title} to cart`}
        >
          <img
            loading="lazy"
            src={cartIcon}
            alt=""
            className="object-contain shrink-0 aspect-square w-[22px]"
          />
          <span className="gap-2.5 my-auto">Move to cart</span>
        </button>
      </div>
    </div>
  );
}