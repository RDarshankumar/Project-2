import React, { useState } from "react";

export function FilterButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="flex flex-col whitespace-nowrap relative">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="flex gap-5 justify-between px-2.5 py-2 bg-white rounded-md border border-solid border-zinc-200 stroke-zinc-200"
        aria-label="Filter options"
      >
        <div className="my-auto">Featured</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5856f14a133c47e12a46cae994469fd19f0077a8a2e95c1c075eeaa5b3027a9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border border-solid border-zinc-200 rounded-md shadow-lg">
          <ul className="flex flex-col">
            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-zinc-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
