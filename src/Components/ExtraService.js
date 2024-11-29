import React from "react";
import Image1 from "./data/Images/Image1.jpg";
import Image2 from "./data/Images/Image2.jpg";
import Image3 from "./data/Images/Image3.jpg";
import Image4 from "./data/Images/Image4.jpg";

const ExtraService = () => {
  return (
    <div className="fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Our extra services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-full h-36 object-cover"
              src={Image2}
              alt="Source from Industry Hubs"
            />
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="text-gray-800 font-medium">
                Source from Industry Hubs
              </h3>
              <span className="text-gray-500 text-xl">&#128269;</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-full h-36 object-cover"
              src={Image4}
              alt="Customize Your Products"
            />
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="text-gray-800 font-medium">
                Customize Your Products
              </h3>
              <span className="text-gray-500 text-xl">&#128203;</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-full h-36 object-cover"
              src={Image1}
              alt="Fast, reliable shipping"
            />
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="text-gray-800 font-medium">
                Fast, reliable shipping by ocean or air
              </h3>
              <span className="text-gray-500 text-xl">&#9992;&#65039;</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              className="w-full h-36 object-cover"
              src={Image3}
              alt="Product monitoring"
            />
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="text-gray-800 font-medium">
                Product monitoring and inspection
              </h3>
              <span className="text-gray-500 text-xl">&#128274;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
