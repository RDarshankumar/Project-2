import * as React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2de05058707743a7c9132673aa313fe4b54ed3dc230ea4870188e198dacbc09d?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "Canon Camera EOS 2000, Black 10x zoom",
    price: "998.00",
    originalPrice: "1128.00",
    rating: "7.5",
    orders: "154",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/76e69eb510d0906b91a3219ff4bffb9e19b2a33fef38dc71b6ee7215d0aad239?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "998.00",
    rating: "7.5",
    orders: "154",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/69835a9f7eef766bc4bbca40ec46269162e647853d2fa0eedede46415f7646fb?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "998.00",
    rating: "7.5",
    orders: "154",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b775b7edae88f15b1d9c1345bd47dac20d59b3b80c1fe1e6a20206b9976a87aa?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "998.00",
    rating: "7.5",
    orders: "154",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3f342d9a772ceede7979cc71603704f67902ff985f4cd4d5a310e68158acfa9c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "998.00",
    originalPrice: "1128.00",
    rating: "7.5",
    orders: "154",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f6618b5b61dbe3a67a57e5891aab8cba4809289333249c9624b200cbba97c1ae?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "998.00",
    rating: "7.5",
    orders: "154",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

function ProductList() {
  return (
    <main className="flex flex-col max-w-[920px]">
      {products.map((product, index) => (
        <div key={index} className={index > 0 ? "mt-2.5" : ""}>
          <ProductCard {...product} />
        </div>
      ))}
    </main>
  );
}

export default ProductList;
