export default function EProducts({ name, price, image }) {
  return (
    <article className="flex flex-col w-full animate__animated animate__fadeIn animate__delay-0.5s">
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        {/* Left Divider */}
        <div className="shrink-0 w-px border border-solid bg-neutral-200 border-neutral-200 h-[127px]" />

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full">
          {/* Name and Price */}
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-zinc-900">{name}</h3>
              <p className="mt-2.5 text-sm text-gray-400">From USD {price}</p>
            </div>

            {/* Product Image */}
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="object-contain mt-4 sm:mt-0 w-[82px] h-[82px] rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Divider Line */}
          <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 mt-4" />
        </div>
      </div>
    </article>
  );
}
