// import * as React from "react";

// export function VerifiedBadge() {
//   return (
//     <div className="flex items-center self-start py-1.5 pr-4">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d9c63419d98190b17e044db3f16068733bc6baf2eb8cd6ed8a2c734fdec3de?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
//         className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[34px]"
//         alt="Verified badge icon"
//       />
//       <div className="self-stretch my-auto">Verified only</div>
//     </div>
//   );
// }

import * as React from "react";

export function VerifiedBadge() {
  return (
    <div className="flex items-center self-start py-1.5 pr-4 sm:pr-2 md:pr-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d9c63419d98190b17e044db3f16068733bc6baf2eb8cd6ed8a2c734fdec3de?placeholderIfAbsent=true&apiKey=517aaac069a941a4a2f05b64ef5a46ea"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[34px] sm:w-[28px] md:w-[30px]"
        alt="Verified badge icon"
      />
      <div className="self-stretch my-auto text-xs sm:text-sm md:text-base">Verified only</div>
    </div>
  );
}
