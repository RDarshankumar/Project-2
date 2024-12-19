// import { ProductCard } from './ProductCard';

// export function ProductGrid({ products }) {
//   return (
//     <section className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
//       <div className="flex flex-col w-full max-md:max-w-full">
//         <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               name={product.name}
//               price={product.price}
//               image={product.image}
//               // Removed the onBuyClick prop
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { ProductCard } from './ProductCard';

export function ProductGrid({ products }) {
  return (
    <section className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


