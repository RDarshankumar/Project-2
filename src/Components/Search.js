import React from "react";

const Search = () => {
  return (
    <div>
      <section className="flex flex-col text-base">
        <div className="flex flex-col justify-center items-center px-20 py-10 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[538px] animate-fadeIn">
            <h2 className="text-xl font-semibold tracking-normal leading-snug text-center text-zinc-900 animate-slideInUp">
              Subscribe to our newsletter
            </h2>
            <p className="self-stretch tracking-normal text-center text-zinc-600 max-md:max-w-full animate-slideInUp delay-100">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
            <form className="flex gap-2 mt-5 max-w-full whitespace-nowrap w-[392px] animate-fadeIn delay-200">
              <div className="flex flex-col grow shrink-0 text-gray-400 basis-0 w-fit">
                <div className="flex gap-1.5 px-2 py-2.5 bg-white rounded-md border border-solid border-zinc-200 stroke-zinc-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec6e8473b5698106715bcf14857123c255fdc37563db9f8dda7b27ffc688f077?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                    className="object-contain shrink-0 aspect-square w-[22px]"
                    alt=""
                  />
                  <label htmlFor="emailInput" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="Email"
                    aria-label="Email"
                    className="grow shrink my-auto w-[226px] bg-transparent border-none focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex flex-col justify-center items-center px-4 font-medium text-center text-white rounded-md bg-[linear-gradient(180deg,#127FFF_0%,#0067FF_100%)] min-h-[40px] transform transition-all duration-300 hover:scale-105 hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
