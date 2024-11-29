import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col rounded-none">
  <div className="px-4 py-5 w-full bg-white rounded-md border border-solid border-zinc-200 stroke-zinc-200 max-w-full">
    <div className="flex flex-wrap gap-5 lg:flex-nowrap">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[22%]">
        <div className="flex flex-col text-base">
          <div className="px-2.5 py-3 font-medium whitespace-nowrap bg-sky-100 rounded-md text-zinc-900">
            Automobiles
          </div>
          <div className="flex flex-col items-start pr-12 pl-2.5 mt-3 text-neutral-600">
            {[
              "Clothes and wear",
              "Home interiors",
              "Computer and tech",
              "Tools, equipments",
              "Sports and outdoor",
              "Animal and pets",
              "Machinery tools",
              "More category",
            ].map((item, index) => (
              <div
                key={index}
                className="mt-5 hover:text-sky-500 transition duration-300 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col w-full lg:w-3/5">
        <div className="relative flex flex-col grow items-start px-5 lg:px-11 pt-14 pb-24 lg:pb-44 min-h-[360px] text-zinc-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49f3fe369fa3f08cb0192a3ef20077f7f9cb633ff239108a623bef6e6de7933b"
            className="object-cover absolute inset-0 w-full h-full rounded-md hover:scale-105 transition-transform duration-500"
          />
          <div className="relative text-3xl">Latest trending</div>
          <div className="relative text-3xl font-bold">Electronic items</div>
          <div className="flex relative flex-col justify-center items-center px-4 mt-4 text-base font-medium text-center bg-white rounded-md border shadow-sm min-h-[40px] text-zinc-900 hover:bg-sky-100 transition duration-300 cursor-pointer">
            <div>Learn more</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full lg:w-[18%]">
        <div className="flex flex-col grow text-base">
          <div className="flex flex-col px-2.5 py-3.5 w-full text-sm font-medium bg-sky-100 rounded-md">
            <div className="flex items-center gap-2.5 text-base text-zinc-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ec0d0636291bdca2c8a7c880db9491ca9fc1f404ce087f50e20b87a886b127"
                className="object-contain w-11 h-11 rounded-full"
              />
              <div>Hi, user, let’s get started</div>
            </div>
            <div className="flex justify-center items-center px-2.5 mt-3.5 w-full text-center text-white bg-gradient-to-b from-blue-500 to-blue-700 rounded-md min-h-[30px] hover:scale-105 transition-transform cursor-pointer">
              Join now
            </div>
            <div className="flex justify-center items-center px-2.5 mt-2 w-full text-center text-blue-600 bg-white border border-solid border-zinc-200 rounded-md min-h-[30px] hover:bg-blue-50 transition cursor-pointer">
              Log in
            </div>
          </div>
          <div className="px-4 py-5 mt-2.5 text-white bg-orange-400 rounded-md hover:bg-orange-500 transition cursor-pointer">
            Get US $10 off with a new supplier
          </div>
          <div className="px-4 py-5 mt-2.5 text-white bg-teal-400 rounded-md hover:bg-teal-500 transition cursor-pointer">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero
