import * as React from "react";

const categories = [
  "Mobile accessory",
  "Electronics",
  "Smartphones",
  "Modern tech",
];

function CategoryList() {
  return (
    <section>
      <header className="flex gap-10 justify-center self-stretch py-3 text-base font-semibold whitespace-nowrap border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Category</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa030f02d3607f77e7afa9052523d93c8da16318a7dbc363c07388114c9bd04?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>
      <nav>
        {categories.map((category, index) => (
          <p key={index} className="mt-4 text-base text-neutral-600">
            {category}
          </p>
        ))}
        <button className="mt-4 text-base text-blue-600">See all</button>
      </nav>
    </section>
  );
}

export default CategoryList;
