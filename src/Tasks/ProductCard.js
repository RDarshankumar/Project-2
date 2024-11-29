import * as React from "react";

function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  orders,
  description,
}) {
  return (
    <article className="py-3 pr-5 pl-2 w-full bg-white rounded-md border border-solid border-zinc-200 stroke-zinc-200 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-3.5 w-full bg-white aspect-square max-md:mt-5">
            <img
              loading="lazy"
              src={image}
              alt={title}
              className="object-contain aspect-square w-[185px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-8 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between self-stretch text-base leading-none text-zinc-900 max-md:max-w-full">
              <h2 className="self-start">{title}</h2>
              <button
                aria-label="Add to favorites"
                tabIndex="0"
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1b627685d9cf28f9508e0454ed30d0e57743cdcb1675aa155a06e17a7d2039?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  alt=""
                  className="object-contain shrink-0 w-10 shadow-sm aspect-square"
                />
              </button>
            </div>
            <div className="flex gap-2 font-semibold whitespace-nowrap">
              <span className="grow text-xl tracking-normal leading-snug text-zinc-900">
                ${price}
              </span>
              {originalPrice && (
                <span className="my-auto text-base text-gray-400">
                  ${originalPrice}
                </span>
              )}
            </div>
            <div className="flex gap-7 mt-1 text-base">
              <div className="flex gap-1.5 text-amber-500 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb081eae29eff3df6c4467e11c3a809b635e7510a864eb824440a0d84f55785b?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  alt=""
                  className="object-contain shrink-0 self-start w-20 aspect-[5.32]"
                />
                <span>{rating}</span>
              </div>
              <div className="flex gap-6">
                <span className="text-gray-400">{orders} orders</span>
                <span className="text-green-600 basis-auto">Free Shipping</span>
              </div>
            </div>
            <p className="mt-3 text-base tracking-normal leading-6 text-neutral-600 max-md:max-w-full">
              {description}
            </p>
            <button className="mt-2 text-base text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
              View details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
