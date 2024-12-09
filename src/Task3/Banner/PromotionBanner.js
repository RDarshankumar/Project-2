import * as React from "react";

function PromotionBanner() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-wrap gap-5 justify-between pr-11 w-full bg-blue-700 rounded-lg max-md:pr-5 max-md:max-w-full">
        <div className="flex relative flex-col items-start py-8 pr-20 pl-8 rounded-none min-h-[120px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c758db01b44ea4dae5a979628b62a05ea531122d76c0ae0f0f406f41030e9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
            className="object-cover absolute inset-0 size-full"
            alt=""
            aria-hidden="true"
          />
          <div 
            className="relative text-2xl font-semibold tracking-normal leading-none text-white max-md:max-w-full"
            role="heading"
            aria-level="2"
          >
            Super discount on more than 100 USD
          </div>
          <div className="relative text-base text-white opacity-70">
            Have you ever finally just write dummy info
          </div>
        </div>
        <button 
          className="flex flex-col justify-center items-center px-4 my-auto text-base font-medium text-center text-white bg-amber-500 rounded-md min-h-[40px]"
          aria-label="Shop now with super discount"
        >
          <div className="gap-2.5">Shop now</div>
        </button>
      </div>
    </div>
  );
}

export default PromotionBanner;