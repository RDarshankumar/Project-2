import * as React from "react";
import { VerifiedBadge } from "./VerifiedBadge";
import { FilterButton } from "./FilterButton";
import { ViewToggle } from "./ViewToggle";

export function MobileAccessoryHeader() {
  return (
    <div className="flex flex-col text-base rounded-none max-w-[920px] text-zinc-900">
      <div className="flex flex-wrap gap-5 justify-between px-4 py-3 w-full bg-white rounded-md border border-solid border-zinc-200 max-md:max-w-full">
        <div className="my-auto">
          12,911 items in{" "}
          <span className="font-semibold">Mobile accessory</span>
        </div>
        <div className="flex gap-2.5">
          <div className="flex flex-auto gap-px">
            <VerifiedBadge />
            <FilterButton />
          </div>
          <ViewToggle />
        </div>
      </div>
    </div>
  );
}