import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="flex flex-col pt-10 text-base bg-white">
        <div class="flex flex-wrap gap-5 justify-between items-start self-center w-full text-gray-400 max-w-[1125px] max-md:max-w-full">
          <section class="flex flex-col items-start self-stretch tracking-normal leading-6 text-neutral-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5af4fc6d55e626ecb9f3bc37b6350d7cee5a27e5df4058e263df59ceed04f41e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
              alt="Company Logo"
              class="object-contain max-w-full aspect-[3.28] w-[151px]"
            />
            <p class="self-stretch mt-4">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/402c3777416e6a10d4060d41b8094ff1aaebe57d00e6492ddd9ca2cef42df285?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
              alt="Company Certification"
              class="object-contain mt-4 max-w-full aspect-[6.25] w-[200px]"
            />
          </section>

          <nav class="flex flex-col items-start" aria-label="About Navigation">
            <h2 class="font-medium leading-none text-zinc-900">About</h2>
            <ul class="list-none p-0">
              <li>
                <a href="#" class="mt-2.5 tracking-normal">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="self-stretch tracking-normal max-md:mr-2">
                  Find store
                </a>
              </li>
              <li>
                <a href="#" class="self-stretch tracking-normal">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>

          <nav
            class="flex flex-col items-start"
            aria-label="Partnership Navigation"
          >
            <h2 class="self-stretch font-medium leading-none text-zinc-900">
              Partnership
            </h2>
            <ul class="list-none p-0">
              <li>
                <a href="#" class="mt-2.5 tracking-normal">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Find store
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>

          <nav
            class="flex flex-col items-start"
            aria-label="Information Navigation"
          >
            <h2 class="font-medium leading-none text-zinc-900">Information</h2>
            <ul class="list-none p-0">
              <li>
                <a href="#" class="mt-2.5 tracking-normal">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="self-stretch tracking-normal">
                  Money Refund
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

          <nav class="flex flex-col items-start" aria-label="User Navigation">
            <h2 class="self-stretch font-medium leading-none text-zinc-900 max-md:mr-2">
              For users
            </h2>
            <ul class="list-none p-0">
              <li>
                <a href="#" class="mt-2.5 tracking-normal">
                  Login
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Register
                </a>
              </li>
              <li>
                <a href="#" class="tracking-normal">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" class="self-stretch tracking-normal">
                  My Orders
                </a>
              </li>
            </ul>
          </nav>

          <section class="flex flex-col font-medium leading-none text-zinc-900">
            <h2 class="self-start">Get app</h2>
            <a href="#" aria-label="Download from App Store">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d37e10d3e2ae10cce3e8528b706520d9b8fa598df2636f4d3245e66c25e6edc?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                alt="Download on App Store"
                class="object-contain mt-4 aspect-[2.95] w-[124px]"
              />
            </a>
            <a href="#" aria-label="Download from Google Play">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87896b7962676c54c3e229935536fa4c607236c30253431d6374300c40d032b5?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                alt="Get it on Google Play"
                class="object-contain mt-2 aspect-[2.95] w-[124px]"
              />
            </a>
          </section>
        </div>

        <section class="flex flex-col justify-center items-center px-16 py-6 mt-14 w-full tracking-normal bg-gray-100 border-t border-solid border-t-zinc-200 text-zinc-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div class="flex flex-wrap gap-5 justify-between w-full max-w-[1176px] max-md:max-w-full">
            <p>© 2023 Ecommerce.</p>
            <div class="flex gap-1.5 text-right whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7044e182cff03b529c0efe97f5b9abf23e3bb3fe8c34b07a1523211aa52645f9?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                alt=""
                class="object-contain shrink-0 my-auto w-6 aspect-[1.41]"
              />
              <button class="flex items-center" aria-label="Select language">
                <span>English</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1030d9f0fef56bcbf45b673f8fa9c4dab743dbd7be4ceeefc537a358a9ff9c5?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                  alt=""
                  class="object-contain shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
