import * as React from "react";

import { Cloths } from "../Cloths";

const products = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d424f74da80f16342da82d0f781f9a20069c142b42fb6b8e778fba2342f81b2?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$10.30",
    description: "T-shirts with multiple colors, for men",
    imageAlt: "Multicolored t-shirt for men",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/636e622ecb30eca28aded532b0e6aaf1f3a44e1be132ac83efd6bfead3e85ca3?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$10.30",
    description: "Jeans shorts for men blue color",
    imageAlt: "Blue jeans shorts for men",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a44918a7e8131e812df1002bc9a4b7433550585c6443281c88dc143ec2737e?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$12.50",
    description: "Brown winter coat medium size",
    imageAlt: "Brown winter coat",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a9ef190646b0d5500e1b904a59fff3189051ad4ec63a5ad49f419294b5786fbb?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$34.00",
    description: "Jeans bag for travel for men",
    imageAlt: "Men's travel jeans bag",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7843465cad0f18825d59086b8e14158b2aa4a864b8bd79f2010c02279b923421?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$99.00",
    description: "Leather wallet",
    imageAlt: "Leather wallet",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be46099bcae1de3dd2c7573296fb1f888ab3ef35d3d7d400a227539fd53e448d?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$9.99",
    description: "Canon camera black, 100x zoom",
    imageAlt: "Black Canon camera with 100x zoom",
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9117905b20f2d36c08c78cc3345fbcdf77a9d734c55d4dfe24e73b4a84a28746?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$8.99",
    description: "Headset for gaming with mic",
    imageAlt: "Gaming headset with microphone",
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7843465cad0f18825d59086b8e14158b2aa4a864b8bd79f2010c02279b923421?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$10.30",
    description: "Smartwatch silver color modern",
    imageAlt: "Modern silver smartwatch",
  },
  {
    id: 9,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d16e7e6579f7b120316c5906003eca8baee6653c17c356f0c5463eda923a5dd7?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$10.30",
    description: "Blue wallet for men leather metarfial",
    imageAlt: "Blue leather wallet for men",
  },
  {
    id: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8aa5651c07ed904ac45d0f5b45bbc8fa81372b651bdb9af8f2cb18bc2a6a8ca0?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea",
    price: "$80.95",
    description: "Jeans bag for travel for men",
    imageAlt: "Men's travel jeans bag",
  },
];

function RecommendedItems() {
  return (
    <section className="flex flex-col">
      <h2 className="self-start text-2xl font-semibold tracking-normal leading-none text-zinc-900">
        Recommended items
      </h2>
      <div className="flex flex-wrap gap-5 mt-6">
        {products.slice(0, 5).map((product) => (
          <Cloths key={product.id} {...product} />
        ))}
      </div>
      <div className="flex flex-wrap gap-5 mt-5 max-md:mr-1">
        {products.slice(5).map((product) => (
          <Cloths key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedItems;
