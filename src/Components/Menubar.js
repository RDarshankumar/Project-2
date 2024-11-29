import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Menubar = () => {
  const navigate = useNavigate()
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [shippingDropdown, setShippingDropdown] = useState(false);
 const handle = ()=>{
  navigate('/responsive')
 }
  return (
    <div className="bg-white border-b border-neutral-200">
      {/* Top Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* Menubar Content */}
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* All Category */}
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c755019ac45b0a7bcdd5f96cf35d09bbb64a0793fc50e48b72bf8ec284caa9f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="w-6 h-6 object-contain"
                alt="All Category"
              />
              <span
                className="text-sm text-gray-800"
                style={{ cursor: "pointer" }}
                onClick={handle}
              >
                All Categories
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-sm text-gray-800 hover:text-blue-500">
                Hot Offers
              </a>
              <a href="#" className="text-sm text-gray-800 hover:text-blue-500">
                Gift Boxes
              </a>
              <a href="#" className="text-sm text-gray-800 hover:text-blue-500">
                Projects
              </a>
              <a href="#" className="text-sm text-gray-800 hover:text-blue-500">
                Menu Item
              </a>
            </div>

            {/* Help */}
            <div className="flex items-center gap-2">
              <a href="#" className="text-sm text-gray-800 hover:text-blue-500">
                Help
              </a>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5856f14a133c47e12a46cae994469fd19f0077a8a2e95c1c075eeaa5b3027a9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="w-4 h-4 object-contain"
                alt="Help Icon"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-6 items-center relative">
            {/* Language and Currency Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setLanguageDropdown(!languageDropdown)}
              >
                <span className="text-sm text-gray-800">English, USD</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5856f14a133c47e12a46cae994469fd19f0077a8a2e95c1c075eeaa5b3027a9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="w-4 h-4 object-contain"
                  alt="Dropdown Icon"
                />
              </div>
              {languageDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    English, USD
                  </div>
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Spanish, EUR
                  </div>
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    French, EUR
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Dropdown */}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShippingDropdown(!shippingDropdown)}
              >
                <span className="text-sm text-gray-800">Ship to</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e622a642d353f6b9f62670500f5e9ea92006d687f91a6626b599e6f5b3e27843?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="w-6 h-6 object-contain"
                  alt="Country Flag"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5856f14a133c47e12a46cae994469fd19f0077a8a2e95c1c075eeaa5b3027a9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="w-4 h-4 object-contain"
                  alt="Dropdown Icon"
                />
              </div>
              {shippingDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    United States
                  </div>
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Canada
                  </div>
                  <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    United Kingdom
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-neutral-200" />
    </div>
  );
};

export default Menubar;
