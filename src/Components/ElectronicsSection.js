import { useState } from "react";
import { product1 } from "./data/Product1"; // Ensure product1 has valid data
import EProducts from "./EProducts"; // Ensure this import is correct

export default function ElectronicsSection() {
  return (
    <section className="flex flex-col rounded-none">
      <div className="px-0.5 w-full bg-white rounded-md border border-solid border-neutral-200 stroke-neutral-200 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Sidebar */}
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full animate__animated animate__fadeIn animate__delay-1s">
            <div className="flex relative flex-col grow items-start pt-5 pr-14 pb-24 pl-5 rounded-none aspect-[1.089] max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe709d717e630c6e42bee356755636e66b766c5caafa88c03a9c07a953c3230?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                alt="Electronics category banner"
                className="object-cover absolute inset-0 size-full transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <h2 className="relative text-xl font-semibold tracking-normal leading-7 text-zinc-900 animate__animated animate__fadeIn animate__delay-1s">
                Consumer electronics and gadgets
              </h2>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-500 ease-in-out">
              {product1.map((product) => (
                <EProducts
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
