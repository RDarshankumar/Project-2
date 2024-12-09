import * as React from "react";
import { SpecificationRow } from "./SpecificationRow";
import { FeatureItem } from "./FeatureItem";

const specifications = [
  { label: "Model", value: "#8786867" },
  { label: "Style", value: "Classic style" },
  { label: "Certificate", value: "ISO-898921212" },
  { label: "Size", value: "34mm x 450mm x 19mm" },
  { label: "Memory", value: "36GB RAM" }
];

const features = [
  { text: "Some great feature name here" },
  { text: "Lorem ipsum dolor sit amet, consectetur" },
  { text: "Duis aute irure dolor in reprehenderit" },
  { text: "Some great feature name here" }
];

function ProductDetails() {
  return (
    <div className="flex flex-col text-base rounded-none max-w-[880px] text-neutral-600">
      <div className="flex flex-col items-start pt-5 pr-16 pb-5 pl-5 w-full bg-white rounded-md border border-solid border-zinc-200 shadow-[0px_1px_3px_rgba(56,56,56,0.1)] stroke-zinc-200 max-md:pr-5 max-md:max-w-full">
        <div className="self-stretch tracking-normal leading-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
          <span className="text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </span>
          <br />
          <span className="text-neutral-600">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
          </span>
        </div>
        {/* Specifications Section */}
        <div className="flex overflow-hidden flex-col mt-4 max-w-full border border-gray-200 border-solid w-full">
          {specifications.map((spec, index) => (
            <SpecificationRow key={index} label={spec.label} value={spec.value} />
          ))}
        </div>
        {/* Features Section */}
        <div className="flex flex-col gap-2.5 mt-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
