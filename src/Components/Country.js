import React from "react";

const Country = () => {
  const countries = [
    {
      name: "Arabic Emirates",
      url: "shopname.ae",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/283bbc396c7e2a5045cd282b0303db934e281c4877aacb2e4cb6473c39092dcf?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "Denmark",
      url: "denmark.com.dk",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/90b0faf73be605e96b835b5165616590adfcd0aa9e0ba8f35b2809c10fc2d024?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "Australia",
      url: "shopname.ae",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/b606cbf111b1cc93b11972ebb131f90202feb2cfc298473eb35320356303ac0c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "France",
      url: "shopname.com.fr",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/095f50f55bc5a0b644636e462d0a37955ed3ea579728ae81db67642c8cfe35e7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "United States",
      url: "shopname.ae",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/97f3f358267c6a5825edd281c27c301794c3403b5fb82c1bdc2b08c1e41f117c?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "Russia",
      url: "shopname.ru",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/c570efc416d96838394f275ab6d8c6b091e6e92ee3c6e16b4098d69b9ff641aa?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
    {
      name: "China",
      url: "shopname.ae",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9fab8363a349d831660cf84f4d72d4a573a31b158479b0b3fe9a099e1f5c542?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },

    {
      name: "Pakistan",
      url: "shopname.pk",
      flag: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb3a4da3e44a39fe7e0937a4742db21a7d2cb0ef28810a3914a79fcd295ba499?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    },
  ];

  return (
    <section className="container mx-auto flex flex-col px-5 py-10">
      <h2 className="self-start text-2xl font-semibold tracking-normal leading-none text-zinc-900">
        Suppliers by region
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-full">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex flex-col p-3 rounded-lg hover:bg-gray-100"
          >
            <div className="flex gap-3">
              <img
                loading="lazy"
                src={country.flag}
                className="object-contain shrink-0 my-auto w-7 aspect-[1.4]"
                alt={`Flag of ${country.name}`}
              />
              <div className="flex flex-col">
                <p className="text-base tracking-normal text-zinc-900">
                  {country.name}
                </p>
                <p className="self-start -mt-1 text-sm text-gray-400">
                  {country.url}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Country;
