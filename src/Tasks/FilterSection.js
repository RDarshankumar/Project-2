import * as React from "react";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import FeatureList from "./FeatureList";
import PriceRange from "./PriceRange";
import ConditionList from "./ConditionList";
import RatingSection from "./RatingSection";

function FilterSection() {
  return (
    <aside className="flex flex-col items-start pr-2 rounded-none max-w-[240px]">
      <CategoryList />
      <BrandList />
      <FeatureList />
      <PriceRange />
      <ConditionList />
      <RatingSection />
    </aside>
  );
}

export default FilterSection;
