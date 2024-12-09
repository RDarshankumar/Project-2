import * as React from "react";

export function FeatureItem({ text }) {
  return (
    <div className="flex gap-2 tracking-normal">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d0ff09efb98847d21b3f98944f81325b0c9c37ed493bf6b136550985390d133?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
        alt=""
        className="object-contain shrink-0 my-auto w-5 aspect-square"
      />
      <div className="basis-auto">{text}</div>
    </div>
  );
}