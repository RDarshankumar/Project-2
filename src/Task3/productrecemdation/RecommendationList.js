import * as React from "react";
import { ProductCard } from "./ProductCard";

const recommendedProducts = [
  {
    id: 1,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ae030b232c7eb6fc1415397be42f18221de0898d296d7fd3e5cfc69546545a4?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "Men Blazers Sets Elegant Formal",
    price: "$7.00 - $99.50"
  },
  {
    id: 2,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8f0fae10b68ae2fda44da1f2545ec51bbf6f7e68a60a3a8c708321dae8e3a70?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50"
  },
  {
    id: 3,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4cb48776f2158006be8e8f1e4138cf3a697b2d64d025bb3d7d2dd8b02ff090c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50"
  },
  {
    id: 4,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ce5524b3ac89d15aeb03c3c88520a522b1b2d49a79b4979ed5f786c6b0fd4f1?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "Basketball Crew Socks Long Stuff",
    price: "$7.00 - $99.50"
  },
  {
    id: 5,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/903c47d979e0c4306a5b5eac3c660aa3f665dd0b9134ae9198dab1f7570539e4?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50"
  }
];

export function RecommendationList() {
  return (
     <div className="flex flex-col max-w-[240px]">
      <div className="flex flex-col px-4 pt-3 pb-4 bg-white rounded-md border border-gray-300 shadow-sm">
        <div className="text-sm font-medium text-gray-900">You may like</div>
        <div className="flex flex-col gap-3 mt-3">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-3 border-b border-gray-200 pb-3 last:border-b-0"
            >
              <img
                src={product.imageSrc}
                alt={product.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {product.title}
                </div>
                <div className="text-xs text-gray-500">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}