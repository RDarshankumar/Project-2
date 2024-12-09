import * as React from "react";

export function SpecificationRow({ label, value }) {
  return (
    <div className="flex flex-wrap pr-10 w-full whitespace-nowrap max-md:pr-5 max-md:max-w-full">
      <div className="px-2.5 py-2.5 bg-gray-100 max-md:pr-5">{label}</div>
      <div className="flex flex-col grow shrink-0 items-start tracking-normal bg-white basis-0 w-fit">
        <div className="z-10 shrink-0 mr-0 h-px border border-gray-200 border-solid max-md:max-w-full" />
        <div className="flex gap-2.5">
          <div className="shrink-0 w-px h-9 border border-gray-200 border-solid" />
          <div className="my-auto">{value}</div>
        </div>
      </div>
    </div>
  );
}