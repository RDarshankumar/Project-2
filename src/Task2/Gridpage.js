// import React from "react";
// import { FaHeart } from "react-icons/fa"; // For heart icon
// import { FaStar } from "react-icons/fa"; // For star rating

// const products = [
//   {
//     id: 1,
//     name: "Smart watches",
//     price: 19,
//     originalPrice: 29,  // Added originalPrice
//     rating: 4.5,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11100383d7a685f4569cf9db659e345585bf6c0f8ae7ec2c1b183ce97d4fb4fc?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 2,
//     name: "Cameras",
//     price: 89,
//     originalPrice: 128, // Added originalPrice
//     rating: 4.2,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/99804598949a6f8c67f8b4472c8475744641d6070ddaea569fbd8db5a8084f98?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 10,
//     originalPrice: 15,  // Added originalPrice
//     rating: 4.0,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cd96f3e88a09a6c4b74f70628df20c6aaed692ba94260edeaa53a79b0b8e0ba?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 4,
//     name: "Smart watches",
//     price: 90,
//     originalPrice: 100, // Added originalPrice for consistency
//     rating: 3.8,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf721d0590661c8f586ed8ec075830edff971e9b6b91823a74014477af73cd6e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 5,
//     name: "Gaming set",
//     price: 35,
//     originalPrice: 45,  // Added originalPrice
//     rating: 4.1,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/297b0ed6da7deb3accf8d6417d1bfaa1e3ab65b3f261667d51406de9a15c95b7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 6,
//     name: "Laptops & PC",
//     price: 340,
//     originalPrice: 400, // Added originalPrice
//     rating: 4.7,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8844f1f184366a3ea1b04aac5bda4a0511c545876d013e2d1d13985a9fc16e02?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 7,
//     name: "Smartphones",
//     price: 19,
//     originalPrice: 30,  // Added originalPrice
//     rating: 4.3,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe0c5621e796c4358dd6a573b6a8fc53ff0cd425c79d1a536e5e0c22b02e4a?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 8,
//     name: "Electric kettle",
//     price: 240,
//     originalPrice: 300, // Added originalPrice
//     rating: 4.4,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/859e1ab0c8f2b844ffc6ee088d6b071d98a6c55b3bab71572077f7a632887435?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   {
//     id: 9,
//     name: "Laptops & PC",
//     price: 440,
//     originalPrice: 400, // Added originalPrice
//     rating: 4.7,        // Added rating
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8844f1f184366a3ea1b04aac5bda4a0511c545876d013e2d1d13985a9fc16e02?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//   },
//   // Add more products similarly...
// ];

// function Gridpage() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden relative"
//           >
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />

//             {/* Product Details */}
//             <div className="p-4">
//               {/* Pricing */}
//               <div className="flex items-center space-x-3">
//                 <p className="text-lg font-bold text-gray-800">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <p className="text-sm line-through text-gray-400">
//                   ${product.originalPrice ? product.originalPrice.toFixed(2) : "N/A"}
//                 </p>
//               </div>

//               {/* Rating */}
//               <div className="flex items-center space-x-1 my-2">
//                 {[...Array(5)].map((_, index) => {
//                   const isHalfStar = product.rating - Math.floor(product.rating) >= 0.5 && index === Math.floor(product.rating);
//                   return (
//                     <FaStar
//                       key={index}
//                       className={`${
//                         index < Math.floor(product.rating) || isHalfStar
//                           ? "text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   );
//                 })}
//                 <p className="text-sm text-gray-500">{product.rating}</p>
//               </div>

//               {/* Product Name */}
//               <p className="text-sm text-gray-600">{product.name}</p>
//             </div>

//             {/* Heart Icon */}
//             <div className="absolute top-4 right-4">
//               <button className="text-gray-400 hover:text-red-500 transition">
//                 <FaHeart size={20} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gridpage;
import React from "react";
import { FaHeart } from "react-icons/fa"; // For heart icon
import { FaStar } from "react-icons/fa"; // For star rating
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smart watches",
    price: 19,
    originalPrice: 29,
    rating: 4.5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11100383d7a685f4569cf9db659e345585bf6c0f8ae7ec2c1b183ce97d4fb4fc?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 2,
    name: "Cameras",
    price: 89,
    originalPrice: 128,
    rating: 4.2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/99804598949a6f8c67f8b4472c8475744641d6070ddaea569fbd8db5a8084f98?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 3,
    name: "Headphones",
    price: 10,
    originalPrice: 15,
    rating: 4.0,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cd96f3e88a09a6c4b74f70628df20c6aaed692ba94260edeaa53a79b0b8e0ba?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 4,
    name: "Smart watches",
    price: 90,
    originalPrice: 100, // Added originalPrice for consistency
    rating: 3.8,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf721d0590661c8f586ed8ec075830edff971e9b6b91823a74014477af73cd6e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 5,
    name: "Gaming set",
    price: 35,
    originalPrice: 45,  // Added originalPrice
    rating: 4.1,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/297b0ed6da7deb3accf8d6417d1bfaa1e3ab65b3f261667d51406de9a15c95b7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 6,
    name: "Laptops & PC",
    price: 340,
    originalPrice: 400, // Added originalPrice
    rating: 4.7,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8844f1f184366a3ea1b04aac5bda4a0511c545876d013e2d1d13985a9fc16e02?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 7,
    name: "Smartphones",
    price: 19,
    originalPrice: 30,  // Added originalPrice
    rating: 4.3,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe0c5621e796c4358dd6a573b6a8fc53ff0cd425c79d1a536e5e0c22b02e4a?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 8,
    name: "Electric kettle",
    price: 240,
    originalPrice: 300, // Added originalPrice
    rating: 4.4,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/859e1ab0c8f2b844ffc6ee088d6b071d98a6c55b3bab71572077f7a632887435?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  {
    id: 9,
    name: "Laptops & PC",
    price: 440,
    originalPrice: 400, // Added originalPrice
    rating: 4.7,        // Added rating
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8844f1f184366a3ea1b04aac5bda4a0511c545876d013e2d1d13985a9fc16e02?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
  },
  
  // Add more products similarly...
];

function Gridpage() {
  const navigate = useNavigate()
  const handledetail = (product)=>{
    navigate('/detail',{state:{name:product.name,price:product.price, image:product.image,rate:product.rating}})
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              {/* Pricing */}
              <div className="flex items-center space-x-3">
                <p className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm line-through text-gray-400">
                  ${product.originalPrice ? product.originalPrice.toFixed(2) : "N/A"}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 my-2">
                {[...Array(5)].map((_, index) => {
                  const isHalfStar =
                    product.rating - Math.floor(product.rating) >= 0.5 &&
                    index === Math.floor(product.rating);
                  return (
                    <FaStar
                      key={index}
                      className={`${
                        index < Math.floor(product.rating) || isHalfStar
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  );
                })}
                <p className="text-sm text-gray-500">{product.rating}</p>
              </div>

              {/* Product Name */}
              <p className="text-sm text-gray-600">{product.name}</p>

              {/* Buy Button */}
              <button className="mt-3 w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg" onClick={()=>handledetail(product)}>
                Buy Now
              </button>
            </div>

            {/* Heart Icon */}
            <div className="absolute top-4 right-4">
              <button className="text-gray-400 hover:text-red-500 transition">
                <FaHeart size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gridpage;
