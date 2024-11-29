const Cloths = () => {
  const recommendedItems = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d424f74da80f16342da82d0f781f9a20069c142b42fb6b8e778fba2342f81b2?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "T-shirts with multiple colors for men",
      price: "$10.30",
      description: "T-shirts with multiple colors, for men"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/636e622ecb30eca28aded532b0e6aaf1f3a44e1be132ac83efd6bfead3e85ca3?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Jeans shorts for men in blue color",
      price: "$10.30",
      description: "Jeans shorts for men blue color"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a44918a7e8131e812df1002bc9a4b7433550585c6443281c88dc143ec2737e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Brown winter coat medium size",
      price: "$12.50",
      description: "Brown winter coat medium size"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9ef190646b0d5500e1b904a59fff3189051ad4ec63a5ad49f419294b5786fbb?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Jeans bag for travel for men",
      price: "$34.00",
      description: "Jeans bag for travel for men"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7843465cad0f18825d59086b8e14158b2aa4a864b8bd79f2010c02279b923421?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Leather wallet",
      price: "$99.00",
      description: "Leather wallet"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/be46099bcae1de3dd2c7573296fb1f888ab3ef35d3d7d400a227539fd53e448d?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Canon camera black with 100x zoom",
      price: "$9.99",
      description: "Canon camera black, 100x zoom"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9117905b20f2d36c08c78cc3345fbcdf77a9d734c55d4dfe24e73b4a84a28746?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Gaming headset with microphone",
      price: "$8.99",
      description: "Headset for gaming with mic"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7843465cad0f18825d59086b8e14158b2aa4a864b8bd79f2010c02279b923421?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Modern silver smartwatch",
      price: "$10.30",
      description: "Smartwatch silver color modern"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d16e7e6579f7b120316c5906003eca8baee6653c17c356f0c5463eda923a5dd7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Blue leather wallet for men",
      price: "$10.30",
      description: "Blue wallet for men leather material"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8aa5651c07ed904ac45d0f5b45bbc8fa81372b651bdb9af8f2cb18bc2a6a8ca0?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
      altText: "Jeans bag for travel for men",
      price: "$80.95",
      description: "Men's travel jeans bag"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
      {recommendedItems.map(item => (
        <article key={item.altText} className="flex flex-col max-w-xs w-full p-4 bg-white rounded-md border border-solid border-neutral-200 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex flex-col items-center">
            <figure className="flex justify-center items-center overflow-hidden w-full mb-4">
              <img
                loading="lazy"
                src={item.imageSrc}
                alt={item.altText}
                className="object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </figure>
            <p className="mt-2 text-base font-medium text-zinc-900">{item.price}</p>
            <p className="mt-2 text-sm text-center text-gray-600">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Cloths;






