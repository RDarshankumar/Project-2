import * as React from "react";

const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];

function BrandList() {
  // State to track selected checkboxes
  const [checkedBrands, setCheckedBrands] = React.useState({});

  // Handler to toggle checkbox state
  const handleCheckboxChange = (brand) => {
    setCheckedBrands((prevState) => ({
      ...prevState,
      [brand]: !prevState[brand],
    }));
  };

  return (
    <section>
      {/* Header */}
      <header className="flex gap-10 justify-center self-stretch py-3 mt-7 text-base font-semibold whitespace-nowrap border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Brands</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa030f02d3607f77e7afa9052523d93c8da16318a7dbc363c07388114c9bd04?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>

      {/* Brands List */}
      {brands.map((brand, index) => (
        <div key={index} className="flex items-center py-1.5 pr-3 max-w-full">
          {/* Checkbox */}
          <input
            type="checkbox"
            id={`brand-${index}`}
            className="w-5 h-5 rounded-md border-2 border-solid border-stone-300 focus:ring-2 focus:ring-blue-500"
            checked={!!checkedBrands[brand]}
            onChange={() => handleCheckboxChange(brand)}
          />
          {/* Label */}
          <label
            htmlFor={`brand-${index}`}
            className="ml-3 text-base text-zinc-900 cursor-pointer"
          >
            {brand}
          </label>
        </div>
      ))}

      {/* Button */}
      <button className="mt-2.5 text-base text-blue-600 hover:underline">
        See all
      </button>
    </section>
  );
}

export default BrandList;
