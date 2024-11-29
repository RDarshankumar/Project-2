import React from "react";

const Country = () => {
  return (
    <div>
      <section className="container mx-auto flex flex-col px-5 py-10">
        <h2 className="self-start text-2xl font-semibold tracking-normal leading-none text-zinc-900">
          Suppliers by region
        </h2>
        <div className="flex flex-wrap gap-5 justify-between mt-6 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/283bbc396c7e2a5045cd282b0303db934e281c4877aacb2e4cb6473c39092dcf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Arabic Emirates"
              />
              <div className="flex flex-col">
                <p className="text-base tracking-normal text-zinc-900">
                  Arabic Emirates
                </p>
                <p className="z-10 self-start -mt-1 text-sm text-gray-400">
                  shopname.ae
                </p>
              </div>
            </div>
            <div className="flex gap-3 self-start mt-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b0faf73be605e96b835b5165616590adfcd0aa9e0ba8f35b2809c10fc2d024?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Denmark"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  Denmark
                </p>
                <p className="text-sm text-gray-400">denmark.com.dk</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-3 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b606cbf111b1cc93b11972ebb131f90202feb2cfc298473eb35320356303ac0c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Australia"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  Australia
                </p>
                <p className="z-10 -mt-1 text-sm text-gray-400">shopname.ae</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/095f50f55bc5a0b644636e462d0a37955ed3ea579728ae81db67642c8cfe35e7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of France"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  France
                </p>
                <p className="text-sm text-gray-400">shopname.com.fr</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-3 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97f3f358267c6a5825edd281c27c301794c3403b5fb82c1bdc2b08c1e41f117c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of United States"
              />
              <div className="flex flex-col">
                <p className="text-base tracking-normal text-zinc-900">
                  United States
                </p>
                <p className="z-10 self-start -mt-1 text-sm text-gray-400">
                  shopname.ae
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/283bbc396c7e2a5045cd282b0303db934e281c4877aacb2e4cb6473c39092dcf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Arabic Emirates"
              />
              <div className="flex flex-col">
                <p className="text-base tracking-normal text-zinc-900">
                  Arabic Emirates
                </p>
                <p className="z-10 self-start -mt-1 text-sm text-gray-400">
                  shopname.ae
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-3 max-md:mr-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c570efc416d96838394f275ab6d8c6b091e6e92ee3c6e16b4098d69b9ff641aa?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Russia"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  Russia
                </p>
                <p className="text-sm text-gray-400">shopname.ru</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9fab8363a349d831660cf84f4d72d4a573a31b158479b0b3fe9a099e1f5c542?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of China"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  China
                </p>
                <p className="text-sm text-gray-400">shopname.ae</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
            <div className="flex gap-3 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/283bbc396c7e2a5045cd282b0303db934e281c4877aacb2e4cb6473c39092dcf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Arabic Emirates"
              />
              <div className="flex flex-col">
                <p className="self-start text-base tracking-normal text-zinc-900">
                  Arabic Emirates
                </p>
                <p className="text-sm text-gray-400">shopname.ae</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-3 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9f153dbd74d1be07ac3c0e1b445b295632ecab15d4987a571e42516bc9259a?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt="Flag of Saudi Arabia"
              />
              <div className="flex flex-col">
                <p className="text-base tracking-normal text-zinc-900">
                  Saudi Arabia
                </p>
                <p className="text-sm text-gray-400">shopname.sa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
