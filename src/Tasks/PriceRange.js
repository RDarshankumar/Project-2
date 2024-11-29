import * as React from "react";

function PriceRange() {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(999999);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <section className="w-full max-w-[400px] mx-auto">
      {" "}
      {/* Adjust width to 400px */}
      <header className="flex gap-10 justify-center self-stretch py-3 mt-7 text-base font-semibold border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Price range</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d6a64b2abc63e2fe59fdf239b323de764929c65c91b90ec48612cfa8fbecaf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt="Price range icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>
      {/* Price Range Slider */}
      <div className="mt-1.5 w-full">
        <label htmlFor="priceRange" className="text-base text-zinc-900">
          Select Price Range
        </label>
        <input
          type="range"
          id="priceRange"
          min="0"
          max="999999"
          step="1000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full mt-2"
        />
        <input
          type="range"
          id="priceRangeMax"
          min="0"
          max="999999"
          step="1000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full mt-2"
        />
      </div>
      {/* Min and Max Price Inputs */}
      <form className="flex flex-col gap-2.5 mt-3.5">
        <div className="flex gap-2.5 self-stretch text-base whitespace-nowrap">
          <div className="flex flex-col" style={{ maxWidth: "120px" }}>
            {" "}
            {/* Set max-width for min price */}
            <label htmlFor="minPrice" className="self-start text-zinc-900">
              Min
            </label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="px-2.5 py-3 mt-1.5 bg-white rounded-md border border-solid border-zinc-200"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col" style={{ maxWidth: "100px" }}>
            {" "}
            {/* Reduced max-width for max price */}
            <label htmlFor="maxPrice" className="self-start text-zinc-900">
              Max
            </label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="px-2.5 py-3 mt-1.5 bg-white rounded-md border border-solid border-zinc-200"
              placeholder="999999"
            />
          </div>
        </div>
        {/* Apply Button */}
        <button
          type="button"
          className="flex justify-center items-center self-stretch px-4 mt-2 w-full text-base font-medium text-center text-blue-600 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-zinc-200 min-h-[40px]"
        >
          Apply
        </button>
      </form>
    </section>
  );
}

export default PriceRange;
