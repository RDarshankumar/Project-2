// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const handlenavigate = () => {
//     navigate("/ShoppingCart");
//   };
//   const navigate = useNavigate();
//   const handleNavigate = () => navigate("/");
//   return (
//     <nav className="bg-white shadow-sm">
//       {/* Main Navbar Container */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af4fc6d55e626ecb9f3bc37b6350d7cee5a27e5df4058e263df59ceed04f41e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//               className="h-8 w-auto sm:h-10"
//               alt="Logo"
//               onClick={handleNavigate}
//               style={{ cursor: "pointer" }}
//             />
//           </div>

//           {/* Search Bar */}
//           <div className="hidden sm:flex flex-grow items-center justify-center mx-4">
//             <div className="flex w-full max-w-lg lg:max-w-xl rounded-md shadow-sm overflow-hidden border border-gray-300">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="flex-grow px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
//               />
//               <select className="px-3 py-2 bg-white border-l border-gray-300 text-sm text-gray-600 outline-none focus:ring focus:ring-blue-200">
//                 <option>All Categories</option>
//                 <option>Category 1</option>
//                 <option>Category 2</option>
//               </select>
//               <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Navigation Icons */}
//           <div className="flex items-center gap-6">
//             {/* Profile */}
//             <div className="text-center text-gray-500 hover:text-blue-500">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/f898f14b2173cea95c5ae9b16cb4e4dbb4a0c214693a36b21452597a583a03f0?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//                 className="h-6 w-6 mx-auto"
//                 alt="Profile"
//               />
//               <div className="text-xs mt-1">Profile</div>
//             </div>
//             {/* Message */}
//             <div className="text-center text-gray-500 hover:text-blue-500">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf08f87535705c1cc09222ca5632a0af4096212bfc961b9b657cad8bb800c63c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//                 className="h-6 w-6 mx-auto"
//                 alt="Message"
//               />
//               <div className="text-xs mt-1">Message</div>
//             </div>
//             {/* Orders */}
//             <div className="text-center text-gray-500 hover:text-blue-500">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb82e567ebac5d509306dd9857bf17efadce44a5c74e5fe1db07a2d508c27f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//                 className="h-6 w-6 mx-auto"
//                 alt="Orders"
//               />
//               <div className="text-xs mt-1">Orders</div>
//             </div>
//             {/* My Cart */}
//             <div className="text-center text-gray-500 hover:text-blue-500">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e2225d78dea7189204ab820cde25159f6cba9cec086e422d8290968dadfb74?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//                 className="h-6 w-6 mx-auto"
//                 alt="My Cart"
//                 onClick={handlenavigate}
//                 style={{ cursor: "pointer" }}
//               />
//               <div className="text-xs mt-1">My Cart</div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         <div className="sm:hidden mt-4">
//           <div className="flex w-full max-w-lg mx-auto rounded-md shadow-sm overflow-hidden border border-gray-300">
//             <input
//               type="text"
//               placeholder="Search"
//               className="flex-grow px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
//             />
//             <select className="px-3 py-2 bg-white border-l border-gray-300 text-sm text-gray-600 outline-none focus:ring focus:ring-blue-200">
//               <option>All Categories</option>
//               <option>Category 1</option>
//               <option>Category 2</option>
//             </select>
//             <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");
  const handleCartNavigate = () => navigate("/ShoppingCart");
  const handleOrderNavigate = () => navigate("/Order");

  return (
    <nav className="bg-white shadow-sm">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af4fc6d55e626ecb9f3bc37b6350d7cee5a27e5df4058e263df59ceed04f41e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
              className="h-8 w-auto sm:h-10"
              alt="Logo"
              onClick={handleNavigate}
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="sm:hidden text-gray-500 hover:text-blue-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="ri-bar-chart-horizontal-line text-2xl"></i>
          </button>

          {/* Search Bar for Desktop */}
          <div className="hidden sm:flex flex-grow items-center justify-center mx-4">
            <div className="flex w-full max-w-lg lg:max-w-xl rounded-md shadow-sm overflow-hidden border border-gray-300">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <select className="px-3 py-2 bg-white border-l border-gray-300 text-sm text-gray-600 outline-none focus:ring focus:ring-blue-200">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
              <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Search
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Profile */}
            <div className="text-center text-gray-500 hover:text-blue-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f898f14b2173cea95c5ae9b16cb4e4dbb4a0c214693a36b21452597a583a03f0?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="h-6 w-6 mx-auto"
                alt="Profile"
              />
              <div className="text-xs mt-1">Profile</div>
            </div>
            {/* Message */}
            <div className="text-center text-gray-500 hover:text-blue-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf08f87535705c1cc09222ca5632a0af4096212bfc961b9b657cad8bb800c63c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="h-6 w-6 mx-auto"
                alt="Message"
              />
              <div className="text-xs mt-1">Message</div>
            </div>
            {/* Orders */}
            <div className="text-center text-gray-500 hover:text-blue-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb82e567ebac5d509306dd9857bf17efadce44a5c74e5fe1db07a2d508c27f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="h-6 w-6 mx-auto"
                alt="Orders"
                onClick={handleOrderNavigate}
                style={{cursor:'pointer'}}
              />
              <div className="text-xs mt-1">Orders</div>
            </div>
            {/* My Cart */}
            <div className="text-center text-gray-500 hover:text-blue-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e2225d78dea7189204ab820cde25159f6cba9cec086e422d8290968dadfb74?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="h-6 w-6 mx-auto"
                alt="My Cart"
                onClick={handleCartNavigate}
                style={{ cursor: "pointer" }}
              />
              <div className="text-xs mt-1">My Cart</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-start gap-4 mt-4">
            {/* Mobile Search Bar */}
            <div className="flex w-full max-w-lg mx-auto rounded-md shadow-sm overflow-hidden border border-gray-300 mb-4">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Search
              </button>
            </div>

            {/* Mobile Navigation Icons */}
            <div className="w-full max-w-lg mx-auto flex flex-col gap-2">
              <div className="text-center text-gray-500 hover:text-blue-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f898f14b2173cea95c5ae9b16cb4e4dbb4a0c214693a36b21452597a583a03f0?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="h-6 w-6 mx-auto"
                  alt="Profile"
                />
                <div className="text-xs mt-1">Profile</div>
              </div>
              <div className="text-center text-gray-500 hover:text-blue-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf08f87535705c1cc09222ca5632a0af4096212bfc961b9b657cad8bb800c63c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="h-6 w-6 mx-auto"
                  alt="Message"
                />
                <div className="text-xs mt-1">Message</div>
              </div>
              <div className="text-center text-gray-500 hover:text-blue-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb82e567ebac5d509306dd9857bf17efadce44a5c74e5fe1db07a2d508c27f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="h-6 w-6 mx-auto"
                  alt="Orders"
                />
                <div className="text-xs mt-1" >Orders</div>
              </div>
              <div className="text-center text-gray-500 hover:text-blue-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e2225d78dea7189204ab820cde25159f6cba9cec086e422d8290968dadfb74?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  className="h-6 w-6 mx-auto"
                  alt="My Cart"
                  onClick={handleCartNavigate}
                  style={{ cursor: "pointer" }}
                />
                <div className="text-xs mt-1">My Cart</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
