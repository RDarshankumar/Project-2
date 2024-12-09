import * as React from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f9f6c786fd70f300d37433b8991655381dd091986ade0a4270add91abb8abef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/afadb74d5fb34997c9762a53bd8bec6bddd1c0d9f8ed696942c54bf593c4f8f3?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d564027610907d269089be575f69d979df70822185d5288e3aa96d4cf6f3a2d5?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/81eef5607e8983c9081827007c32ccbe347d4e53294e0c6731817209de192dc2?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/341c52289c747a18fbb1b6b72c8cb6922de95a9c8d5364edf6a12fa4f88bec34?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/acc92d2fc9c0b66ea30104050c00fae7d7052bc20e5acc0760dfbff3673969e5?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    productName: "Xiaomi Redmi 8 Original",
    priceRange: "$32.00-$40.00"
  }
];

export function RelatedProducts() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col px-6 pt-5 pb-9 w-full bg-white rounded-md border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
        <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-zinc-900">
          Related products
        </h2>
        <div className="flex flex-wrap gap-5 mt-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              productName={product.productName}
              priceRange={product.priceRange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
