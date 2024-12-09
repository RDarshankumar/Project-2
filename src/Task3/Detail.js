import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menubar from "../Components/Menubar";
import Breadcrumb from "../Tasks/Breadcrumb";
import GridLayout from "./GridLayout";

const Detail = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { name, price, image, rate } = location.state || {};
  
  const handleAddToCart = () => {
    // Fetch the existing cart from local storage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Add the new product to the cart
    const updatedCart = [...existingCart, { img: image, name, price }];
  
    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    // Navigate to the ShoppingCart page
    navigate("/ShoppingCart");
  };

  return (
    <>
      <Navbar />
      <Menubar />
      <Breadcrumb />
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto border border-gray-200 flex flex-col md:flex-row items-start gap-6">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={image} // Replace with your image URL
              alt="Mens Long Sleeve T-shirt"
              className="w-48 h-48 object-cover rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="flex items-center gap-4 mb-4 text-gray-500">
              <span className="text-yellow-500 text-sm">⭐ {rate}</span>
              <span className="text-sm">32 reviews</span>
              <span className="text-sm">154 sold</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-red-500 font-semibold">${price}</span>
              <span className="text-gray-500 line-through">$90.00</span>
              <span className="text-gray-500">$78.00</span>
            </div>

            {/* Product Details */}
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>Price: Negotiable</li>
              <li>Type: Classic shoes</li>
              <li>Material: Plastic material</li>
              <li>Design: Modern nice</li>
            </ul>

            {/* Customization */}
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>Customization: Customized logo and design custom packages</li>
              <li>Protection: Refund Policy</li>
              <li>Warranty: 2 years full warranty</li>
            </ul>
          </div>

          {/* Supplier Info */}
          <div className="bg-white shadow-md rounded-lg p-4 max-w-sm border border-gray-200">
            {/* Supplier Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl font-semibold text-white">
                R
              </div>
              <div>
                <h2 className="text-lg font-semibold">Supplier</h2>
                <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img
                  src="https://flagcdn.com/w40/de.png" // Germany Flag
                  alt="Germany Flag"
                  className="w-5 h-5"
                />
                <span>Germany, Berlin</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m0 12.75H9m6 0h-.75M4.5 9h15M9 9h6"
                  />
                </svg>
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.51 0 4.91.99 6.62 2.62L12 12m0 0l-6.62-6.38A9.934 9.934 0 0112 3m0 0l6.62 6.38a9.934 9.934 0 010 13.24M12 12l-6.62 6.38A9.934 9.934 0 0112 21"
                  />
                </svg>
                <span>Worldwide shipping</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Send Inquiry
              </button>
              <button className="border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50">
                Seller's Profile
              </button>
              <button className="border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50"  onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <GridLayout />
      </div>
    </>
  );
};

export default Detail;
