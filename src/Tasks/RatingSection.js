import * as React from "react";

function RatingSection() {
  return (
    <section>
      <header className="flex gap-10 justify-center self-stretch py-3 mt-5 text-base font-semibold whitespace-nowrap border-t border-solid border-t-zinc-200 text-zinc-900">
        <h2 className="my-auto">Ratings</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/951c1f28eb1ff13d3b90e790c9bcbb67618ac485c5893c12754a6335c5120552?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a19bea31b367cb9de420ff3416eeaf73668f82eca5fcde804cded2f5291430?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
        alt="Rating stars"
        className="object-contain max-w-full aspect-[0.99] w-[143px]"
      />
    </section>
  );
}

export default RatingSection;
