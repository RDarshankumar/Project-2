import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col rounded-none">
      <div className="py-1 pr-1 pl-5 w-full bg-white rounded-md border border-solid border-zinc-200 stroke-zinc-200 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 w-full max-md:mt-10">
              <div className="self-start text-xl font-semibold tracking-normal leading-snug text-zinc-900">
                Deals and offers
              </div>
              <div className="flex gap-1.5 mt-9 text-center text-white whitespace-nowrap">
                <div className="flex flex-col flex-1 p-2 rounded bg-zinc-600">
                  <div className="self-start text-base font-bold">04</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="flex flex-col flex-1 p-2 rounded bg-zinc-600">
                  <div className="self-start text-base font-bold">13</div>
                  <div className="text-xs">Hour</div>
                </div>
                <div className="flex flex-col flex-1 items-center px-2.5 py-2 rounded bg-zinc-600">
                  <div className="text-base font-bold">34</div>
                  <div className="text-xs">Min</div>
                </div>
                <div className="flex flex-col flex-1 items-center px-2.5 py-2 rounded bg-zinc-600">
                  <div className="text-base font-bold">56</div>
                  <div className="text-xs">Sec</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow tracking-normal text-center max-md:mt-10">
              <div className="flex flex-col flex-1">
                <div className="flex gap-5 pr-5 bg-white">
                  <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[235px]" />
                  <div className="flex flex-col items-center my-auto max-w-full w-[140px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42fa8e37f257492ad1eaf37109643d3539d3d94633c9da4aa5e95672c714f1ef?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                      className="object-contain self-stretch w-full aspect-square"
                    />
                    <div className="mt-3 text-base text-zinc-900">
                      Smart watches
                    </div>
                    <div className="gap-2.5 self-stretch px-3.5 py-1.5 mt-2 text-sm font-medium text-red-600 whitespace-nowrap bg-red-100 min-h-[28px] rounded-[29px]">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 whitespace-nowrap">
                <div className="flex gap-5 pr-5 bg-white">
                  <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[235px]" />
                  <div className="flex flex-col items-center my-auto max-w-full w-[140px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1b3f4e3f5abda1c12bb20356176109ee0027fed41257e05f5e8dd4482e7e74c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                      className="object-contain self-stretch w-full aspect-square"
                    />
                    <div className="mt-3 text-base text-zinc-900">Laptops</div>
                    <div className="gap-2.5 self-stretch px-3.5 py-1.5 mt-2 text-sm font-medium text-red-600 bg-red-100 min-h-[28px] rounded-[29px]">
                      -15%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-5 pr-5 bg-white">
                  <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[235px]" />
                  <div className="flex flex-col items-center my-auto max-w-full w-[140px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d63618d4a2ca342eb96204bcbc8742884f3b43155650802d6487314506190a69?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                      className="object-contain self-stretch w-full aspect-square"
                    />
                    <div className="mt-3 text-base text-zinc-900">
                      GoPro cameras
                    </div>
                    <div className="gap-2.5 self-stretch px-3.5 py-1.5 mt-2 text-sm font-medium text-red-600 whitespace-nowrap bg-red-100 min-h-[28px] rounded-[29px]">
                      -40%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 whitespace-nowrap">
                <div className="flex gap-5 pr-5 bg-white">
                  <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[235px]" />
                  <div className="flex flex-col items-center my-auto max-w-full w-[140px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15483a671edb85b0522c120764aa60b0399ada1c5cb3d5adbb9f0ad0535eaf1f?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                      className="object-contain self-stretch w-full aspect-square"
                    />
                    <div className="mt-3 text-base text-zinc-900">
                      Headphones
                    </div>
                    <div className="gap-2.5 self-stretch px-3.5 py-1.5 mt-2 text-sm font-medium text-red-600 bg-red-100 min-h-[28px] rounded-[29px]">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-5 pr-5 bg-white">
                  <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[235px]" />
                  <div className="flex flex-col items-center my-auto max-w-full w-[140px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6342d240b78f215de7fa56f40e8a651a4d2ce1df160210949b1d267bfd15138?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                      className="object-contain self-stretch w-full aspect-square"
                    />
                    <div className="mt-3 text-base text-zinc-900">
                      Canon camreras
                    </div>
                    <div className="gap-2.5 self-stretch px-3.5 py-1.5 mt-2 text-sm font-medium text-red-600 whitespace-nowrap bg-red-100 min-h-[28px] rounded-[29px]">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
