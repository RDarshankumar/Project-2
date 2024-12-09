import * as React from "react";
import { ProductCard } from "./ProductCard";
import { savedItems } from "./savedItems";

export function SavedItem() {
  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col px-5 py-6 w-full bg-white rounded-md border border-solid border-zinc-200 max-md:max-w-full">
        <h1 className="self-start text-xl font-semibold tracking-normal leading-snug text-zinc-900">
          Saved for later
        </h1>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {savedItems.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                cartIcon={item.cartIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}