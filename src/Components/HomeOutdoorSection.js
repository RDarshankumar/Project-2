import { product } from "./data/Product";
import { ProductGrid } from "./ProductGrid";

export function HomeOutdoorSection() {
  return (
    <section className="flex flex-col rounded-none">
      <div className="px-0.5 w-full bg-white rounded-md border border-solid border-neutral-200 stroke-neutral-200 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Sidebar */}
          <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full animate__animated animate__fadeIn animate__delay-1s">
            <div className="flex relative flex-col grow items-start pt-5 pr-14 pb-32 pl-5 rounded-none aspect-[1.089] max-md:pr-5 max-md:pb-24">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f01f45f6464368dfd35164000a3fac507b3543fc71f4e6eb6399d04eb9ffd01?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                alt="Home and outdoor background"
                className="object-cover absolute inset-0 size-full transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <h2 className="relative text-xl font-semibold tracking-normal leading-7 text-zinc-900 animate__animated animate__fadeIn animate__delay-1s">
                Home and outdoor
              </h2>
              <button className="flex relative flex-col justify-center items-center px-4 mt-5 text-base font-medium text-center bg-white rounded-md border border-white border-solid shadow-sm min-h-[40px] text-zinc-900 transition-all duration-300 hover:bg-neutral-100 hover:shadow-lg">
                Source now
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <ProductGrid products={product} />
        </div>
      </div>
    </section>
  );
}
